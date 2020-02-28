import {mathSqrt,mathAtan2} from '../constants';
import * as matrixUtil from '../../core/utils/affine_matrix_util';
import * as vectorUtil from '../../core/utils/vector_util';
import * as classUtil from '../../core/utils/class_util';
import * as dataUtil from '../../core/utils/data_structure_util';

/**
 * @abstract
 * @class qrenderer.graphic.Transformable
 * 
 * Provide geometric transformation functions for Element, such as position, scale, skew, rotation.
 * 
 * 为 Element 提供几何变换功能，例如：平移、缩放、扭曲、旋转、翻转。
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
 * @author pissang (https://www.github.com/pissang)
 * @docauthor 大漠穷秋 <damoqiongqiu@126.com>
 */

let scaleTmp = [];
let transformTmp = [];

/**
 * @method constructor Transformable
 */
let Transformable = function (options={}) {
    /**
     * @property {Array<Number>} origin
     * 几何变换的原点，默认为最左上角的(0,0)点。
     */
    this.origin = (options.origin===null||options.origin===undefined)?[0, 0]:options.origin;

    /**
     * @property {Array<Number>} rotation
     * 旋转弧度。
     */
    this.rotation = (options.rotation===null||options.rotation===undefined)?0:options.rotation;

    /**
     * @property {Array<Number>} position
     * 平移，二维数组。
     */
    this.position = (options.position===null||options.position===undefined)?[0, 0]:options.position;
    
    /**
     * @property {Array<Number>} scale
     * 缩放，二维数组。
     */
    this.scale = (options.scale===null||options.scale===undefined)?[1, 1]:options.scale;

    /**
     * @property {Array<Number>} skew
     * 斜切，二维数组。
     */
    this.skew = (options.skew===null||options.skew===undefined)?[0, 0]:options.skew;

    /**
     * @property {Matrix} transform
     * 变换矩阵。为了能和动画机制很好地配合，请不要直接操作 transform 属性， SVGPainter 除外。
     */
    this.transform=matrixUtil.create();

    /**
     * @property {Matrix} inverseTransform
     * 逆变换矩阵。
     */
    this.inverseTransform=null;

    //全局缩放比例
    this.globalScaleRatio=1;
};

Transformable.prototype={
    constructor:Transformable,

    /**
     * @method needLocalTransform
     * 
     * 如果变化的值小于5e-5（0.00005），则不需要变换。
     * 
     * @return {Boolean}
     */
    needLocalTransform:function () {
        return dataUtil.isNotAroundZero(this.rotation)
            || dataUtil.isNotAroundZero(this.position[0])
            || dataUtil.isNotAroundZero(this.position[1])
            || dataUtil.isNotAroundZero(this.scale[0] - 1)
            || dataUtil.isNotAroundZero(this.scale[1] - 1)
            || dataUtil.isNotAroundZero(this.skew[0] - 1)
            || dataUtil.isNotAroundZero(this.skew[1] - 1);
    },

    /**
     * @method applyTransform
     * 
     * Apply this.transform matrix to context.
     * 
     * 将自己的 transform 应用到 context 上。
     * 
     * @param {CanvasRenderingContext2D} ctx
     */
    applyTransform:function (ctx) {
        let m = this.transform;
        let dpr = ctx.dpr || 1;
        if (m) {
            ctx.setTransform(dpr * m[0], dpr * m[1], dpr * m[2], dpr * m[3], dpr * m[4], dpr * m[5]);
        }else {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
    },

    /**
     * @method restoreTransform
     * 重置变换矩阵。
     * @param {Context} ctx 
     */
    restoreTransform:function (ctx) {
        let dpr = ctx.dpr || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    /**
     * @method getLocalTransform
     * 获取本地变换矩阵。
     * 
     * Note: 这里的实现没有考虑仿射变换中的矩阵乘法顺序，因为 API 调用者
     * 在提供配置项时并不会留意数学意义上的变换顺序，而总是采用的直觉意义
     * 上的变换顺序 skew->scale->rotation->position 。
     * 
     *      @example
     *      rect.animate()
     *      .when(1000,{
     *          position:[100,100],
     *          skew:[2,2],
     *          scale:[2,2],
     *          rotate:Math.PI
     *      })
     *      .when(2000,{
     *          position:[200,100],
     *          scale:[1,1],
     *          skew:[1,1],
     *          rotate:-Math.PI
     *      })
     *      .start();
     * 
     * 
     * 这种实现方式有一个重大的缺点，它不能很好地对应 SVG 中的 transform 机制，
     * 比如：<path transform="rotation(Math.PI);scale(2,2);">
     * 这个 transform 属性表达的意思是：先 rotation ，然后 scale ，这就要求严格按照
     * 仿射变换的顺序来进行矩阵运算。
     */
    getLocalTransform:function () {
        let origin = this.origin || [0,0];
        let rotation = this.rotation || 0;
        let position = this.position || [0,0];
        let scale = this.scale || [1,1];
        let skew = this.skew || [0,0];

        let m=matrixUtil.create();
        //移动原点
        m[4] -= origin[0];
        m[5] -= origin[1];
        
        m = matrixUtil.skew(m, skew);
        m = matrixUtil.scale(m, scale);
        m = matrixUtil.rotate(m, rotation);

        //原点移回去
        m[4] += origin[0];
        m[5] += origin[1];
    
        //平移变换的值
        m[4] += position[0];
        m[5] += position[1];

        return m;
    },

    /**
     * @method composeLocalTransform
     * 把各项参数，包括：scale、position、skew、rotation、父层的变换矩阵、全局缩放，全部
     * 结合在一起，计算出一个新的本地变换矩阵，此操作是 decomposeLocalTransform 是互逆的。
     */
    composeLocalTransform:function () {
        let parent = this.parent;
        let parentHasTransform = parent && parent.transform;
        let needLocalTransform = this.needLocalTransform();

        let m = this.transform;

        // 自身的变换
        if (needLocalTransform) {
            m=this.getLocalTransform();
        }else {
            matrixUtil.identity(m);
        }

        // 应用父节点变换
        if (parentHasTransform) {
            if (needLocalTransform) {
                m=matrixUtil.mul(parent.transform, m);
            }else {
                matrixUtil.copy(m, parent.transform);
            }
        }

        // 应用全局缩放
        if (this.globalScaleRatio != null && this.globalScaleRatio !== 1) {
            this.getGlobalScale(scaleTmp);
            let relX = scaleTmp[0] < 0 ? -1 : 1;
            let relY = scaleTmp[1] < 0 ? -1 : 1;
            let sx = ((scaleTmp[0] - relX) * this.globalScaleRatio + relX) / scaleTmp[0] || 0;
            let sy = ((scaleTmp[1] - relY) * this.globalScaleRatio + relY) / scaleTmp[1] || 0;
            
            m[0] *= sx;
            m[1] *= sx;
            m[2] *= sy;
            m[3] *= sy;
        }
        
        //保存变换矩阵
        this.transform = m;
        //计算逆变换矩阵
        this.inverseTransform = this.inverseTransform || matrixUtil.create();
        this.inverseTransform = matrixUtil.invert(this.inverseTransform, m);
    },

    /**
     * @method getGlobalScale
     * Get global scale
     * @return {Array<Number>}
     */
    getGlobalScale:function (out=[]) {
        let m = this.transform;
        out[0] = mathSqrt(m[0] * m[0] + m[1] * m[1]);
        out[1] = mathSqrt(m[2] * m[2] + m[3] * m[3]);
        if (m[0] < 0) {
            out[0] = -out[0];
        }
        if (m[3] < 0) {
            out[1] = -out[1];
        }
        return out;
    },

    /**
     * @method globalToLocal
     * 变换坐标位置到 shape 的局部坐标空间。
     * @param {Number} x
     * @param {Number} y
     * @return {Array<Number>}
     */
    globalToLocal:function (x, y) {
        let v2 = [x, y];
        let inverseTransform = this.inverseTransform;
        if (inverseTransform) {
            vectorUtil.applyTransform(v2, v2, inverseTransform);
        }
        return v2;
    },

    /**
     * @method localToGlobal
     * 变换局部坐标位置到全局坐标空间
     * @param {Number} x
     * @param {Number} y
     * @return {Array<Number>}
     */
    localToGlobal:function (x, y) {
        let v2 = [x, y];
        let transform = this.transform;
        if (transform) {
            vectorUtil.applyTransform(v2, v2, transform);
        }
        return v2;
    }
}

export default Transformable;