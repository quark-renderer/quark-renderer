import * as dataUtil from '../../utils/data_structure_util';
import * as classUtil from '../../utils/class_util';
import {subPixelOptimizeLine} from '../../utils/sub_pixel_optimize';
import CableLike from '../link/CableLike';
import Path from '../Path';

/**
 * @class qrenderer.graphic.shape.Line 
 * Line.
 * 
 * 
 * 直线。
 * @docauthor 大漠穷秋 <damoqiongqiu@126.com>
 */
class Line extends Path{
    /**
     * @method constructor Line
     * @param {Object} options 
     */
    constructor(options){
        super(dataUtil.merge({
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                percent: 1
            },
            style: {
                stroke: '#000',
                fill: null
            }
        },options,true));

        /**
         * @property {String} type
         */
        this.type='line';

        classUtil.inheritProperties(this,CableLike,this.options);           // If we don't need linkable feature, just remove this line.
        classUtil.copyOwnProperties(this,this.options,['style','shape']);
    }

    /**
     * @method buildPath
     * Build the path of current line, the data structure is like the path attribute in SVG.
     * 
     * 
     * 构建当前线条的路径，数据结构类似 SVG 中的 path 属性。
     * @param {Object} ctx 
     * @param {String} shape 
     */
    buildPath(ctx, shape) {
        let x1;
        let y1;
        let x2;
        let y2;

        if (this.subPixelOptimize) {
            let subPixelOptimizeOutputShape={};
            subPixelOptimizeLine(subPixelOptimizeOutputShape, shape, this.style);
            x1 = subPixelOptimizeOutputShape.x1;
            y1 = subPixelOptimizeOutputShape.y1;
            x2 = subPixelOptimizeOutputShape.x2;
            y2 = subPixelOptimizeOutputShape.y2;
        }else {
            x1 = shape.x1;
            y1 = shape.y1;
            x2 = shape.x2;
            y2 = shape.y2;
        }

        let percent = shape.percent;

        if (percent === 0) {
            return;
        }

        ctx.moveTo(x1, y1);

        if (percent < 1) {
            x2 = x1 * (1 - percent) + x2 * percent;
            y2 = y1 * (1 - percent) + y2 * percent;
        }
        ctx.lineTo(x2, y2);
    }

    /**
     * @method pointAt
     * Get point at percent, this value is between 0 and 1.
     * 
     * 
     * 按照比例获取线条上的点，取值范围在 0 到 1 之间。
     * @param  {Number} percent
     * @return {Array<Number>}
     */
    pointAt(p) {
        let shape = this.shape;
        return [
            shape.x1 * (1 - p) + shape.x2 * p,
            shape.y1 * (1 - p) + shape.y2 * p
        ];
    }

    /**
     * @protected
     * @method renderTransformControls
     * Disable renderTransformControls method in Element, because we don't allow transformation on lines.
     * 
     * 
     * 禁用 Elemnet 类上的 renderTransformControls 方法，因为我们不希望在线条上使用几何变换。
     * @param {*} ctx 
     * @param {*} prevEl 
     */
    renderTransformControls(ctx, prevEl){
    }
}

classUtil.mixin(Line, CableLike);
export default Line;