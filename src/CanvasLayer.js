import * as dataUtil from './core/utils/data_structure_util';
import * as canvasUtil from './core/utils/canvas_util';
import {devicePixelRatio} from './config';
import Style from './graphic/Style';
import Pattern from './graphic/Pattern';

/**
 * @class qrenderer.canvas.Layer
 * 用来创建 canvas 层，在 Painter 类中会引用此类。
 * @author pissang(https://www.github.com/pissang)
 * @docauthor 大漠穷秋 <damoqiongqiu@126.com>
 */

/**
 * @private
 * @method
 * 创建dom
 * @param {String} id dom id 待用
 * @param {Painter} painter painter instance
 * @param {Number} number
 * @return {Canvas}
 */
function createCanvas(id, painter, dpr) {
    let canvas = canvasUtil.createCanvas();
    let width = painter.getWidth();
    let height = painter.getHeight();
    let newStyle = canvas.style;

    if (newStyle) {  // In node or some other non-browser environment
        newStyle.position = 'absolute';
        newStyle.left = 0;
        newStyle.top = 0;
        newStyle.width = width + 'px';
        newStyle.height = height + 'px';
        canvas.setAttribute('data-qr-dom-id', id);
    }

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    return canvas;
}

/**
 * @method constructor Layer
 * @param {String} id
 * @param {Painter} painter
 * @param {Number} [dpr]
 */
let Layer = function (id, painter, dpr) {
    let canvas;
    dpr = dpr || devicePixelRatio;
    if (typeof id === 'string') {
        canvas = createCanvas(id, painter, dpr);
    }else if (dataUtil.isObject(id)) {// Not using isDom because in node it will return false
        canvas = id;
        id = canvas.id;
    }
    this.id = id;
    this.dom = canvas;

    let canvasStyle = canvas.style;
    if (canvasStyle) { // Not in node
        canvas.onselectstart = ()=>{return false;}; // 避免页面选中的尴尬
        canvasStyle['-webkit-user-select'] = 'none';
        canvasStyle['user-select'] = 'none';
        canvasStyle['-webkit-touch-callout'] = 'none';
        canvasStyle['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
        canvasStyle['padding'] = 0; // eslint-disable-line dot-notation
        canvasStyle['margin'] = 0; // eslint-disable-line dot-notation
        canvasStyle['border-width'] = 0;
    }

    this.domBack = null;
    this.ctxBack = null;
    this.painter = painter;
    this.config = null;

    /**
     * @property {String} 每次清空画布的颜色
     */
    this.clearColor = 0;
    /**
     * @property {boolean} 是否开启动态模糊
     */
    this.motionBlur = false;
    /**
     * @property {Number} 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
     */
    this.lastFrameAlpha = 0.7;
    /**
     * @property {Number} Layer dpr
     */
    this.dpr = dpr;
};

Layer.prototype = {
    constructor: Layer,
    __dirty: true,
    __used: false,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: false,

    /**
     * @method getElementCount
     */
    getElementCount: function () {
        return this.__endIndex - this.__startIndex;
    },

    /**
     * @method initContext
     */
    initContext: function () {
        this.ctx = this.dom.getContext('2d');
        this.ctx.dpr = this.dpr;
    },

    /**
     * @method createBackBuffer
     */
    createBackBuffer: function () {
        let dpr = this.dpr;

        this.domBack = createCanvas('back-' + this.id, this.painter, dpr);
        this.ctxBack = this.domBack.getContext('2d');

        if (dpr !== 1) {
            this.ctxBack.scale(dpr, dpr);
        }
    },

    /**
     * @method resize
     * @param  {Number} width
     * @param  {Number} height
     */
    resize: function (width, height) {
        let dpr = this.dpr;
        let dom = this.dom;
        let domStyle = dom.style;
        let domBack = this.domBack;

        if (domStyle) {
            domStyle.width = width + 'px';
            domStyle.height = height + 'px';
        }

        dom.width = width * dpr;
        dom.height = height * dpr;

        if (domBack) {
            domBack.width = width * dpr;
            domBack.height = height * dpr;

            if (dpr !== 1) {
                this.ctxBack.scale(dpr, dpr);
            }
        }
    },

    /**
     * @method clear
     * 清空该层画布
     * @param {boolean} [clearAll=false] Clear all with out motion blur
     * @param {Color} [clearColor]
     */
    clear: function (clearAll, clearColor) {
        clearColor = clearColor || this.clearColor;
        let dom = this.dom;
        let ctx = this.ctx;
        let width = dom.width;
        let height = dom.height;
        let haveMotionBLur = this.motionBlur && !clearAll;
        let lastFrameAlpha = this.lastFrameAlpha;
        let dpr = this.dpr;

        if (haveMotionBLur) {
            if (!this.domBack) {
                this.createBackBuffer();
            }

            this.ctxBack.globalCompositeOperation = 'copy';
            this.ctxBack.drawImage(
                dom, 0, 0,
                width / dpr,
                height / dpr
            );
        }

        ctx.clearRect(0, 0, width, height);
        if (clearColor && clearColor !== 'transparent') {
            let clearColorGradientOrPattern;
            // Gradient
            if (clearColor.colorStops) {
                // Cache canvas gradient
                clearColorGradientOrPattern = clearColor.__canvasGradient || Style.getGradient(ctx, clearColor, {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                });

                clearColor.__canvasGradient = clearColorGradientOrPattern;
            }
            // Pattern
            else if (clearColor.image) {
                clearColorGradientOrPattern = Pattern.prototype.getCanvasPattern.call(clearColor, ctx);
            }
            ctx.save();
            ctx.fillStyle = clearColorGradientOrPattern || clearColor;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }

        if (haveMotionBLur) {
            let domBack = this.domBack;
            ctx.save();
            ctx.globalAlpha = lastFrameAlpha;
            ctx.drawImage(domBack, 0, 0, width, height);
            ctx.restore();
        }
    }
};

export default Layer;