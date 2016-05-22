/**
 * Created by slashhuang on 16/5/22.
 * 移动端手势系统入口
 */
/**
 * 引入父类
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _EventProtoJs = require('./EventProto.js');

var _EventProtoJs2 = _interopRequireDefault(_EventProtoJs);

/**
 * 引入工具类
 */

var _utilsUtilsJs = require('./utils/utils.js');

var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);

var _utilsWarningJs = require('./utils/warning.js');

var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

var GestureEvent = (function (_EventProto) {
    _inherits(GestureEvent, _EventProto);

    function GestureEvent(ele, options) {
        _classCallCheck(this, GestureEvent);

        _EventProto.call(this, ele, options); //获取父类实例的eventList
        /**
         * 绑定实例dom节点和配置信息
         */
        this.ele = ele;
        /**
         * 绑定事件
         */
        this.bindEvents();
        /**
         *  检测目标对象的参数
         * @type {{startX: number, startY: number, lastX: number, lastY: number}}
         */
        var DOMInfo = {
            startX: 0,
            startY: 0,
            lastX: 0,
            lastY: 0,
            startTime: Date.now()
        };
        Object.assign(this, DOMInfo);
    }

    GestureEvent.prototype.bind = function bind(type, func) {
        this.ele.addEventListener(type, func, false);
    };

    GestureEvent.prototype.unbind = function unbind(type, func) {
        this.ele.removeEventListener(type, func);
    };

    /**
     * 挂载事件
     */

    GestureEvent.prototype.bindEvents = function bindEvents() {
        var that = this;
        var touchEvents = {
            'touchstart': {
                callback: that._touchStart
            },
            'touchmove': {
                callback: that._touchMove
            },
            'touchend': {
                callback: that._touchEnd
            }
        };
        /**
         * 在mouse事件中取消mousemove单独事件，放在mousedown和mouseup里面
         * @type {{mousedown: {callback: Function}, mouseup: {callback: Function}}}
         */
        var mouseEvents = {
            'mousedown': {
                callback: function callback(e) {
                    that._touchStart(e);
                    that.bind('mousemove', that._touchMove);
                }
            },
            'mouseup': {
                callback: function callback(e) {
                    that._touchEnd(e);
                    that.unbind('mousemove', that._touchMove);
                }
            }
        };
        var finalEvents = _utilsUtilsJs2['default'].isMobile() ? touchEvents : mouseEvents;
        for (var key in finalEvents) {
            this.bind(key, finalEvents[key].callback);
        }
    };

    /**
     * 设置滑动最后的信息
     * @param e
     */

    GestureEvent.prototype.setSliderLastInfo = function setSliderLastInfo(e) {
        this.lastX = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageX : e.clientX;
        this.lastY = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageY : e.clientY;
    };

    /**
     * 设置滑动初始化的信息
     * @param e
     */

    GestureEvent.prototype.setStartInfo = function setStartInfo(e) {
        this.startX = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageX : e.clientX;
        this.startY = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageY : e.clientY;
        this.startTime = Date.now();
    };

    GestureEvent.prototype._touchStart = function _touchStart(e) {
        //这里只允许单指操作，不会影响鼠标操作
        if (e.touches && e.touches.length > 1) {
            return false;
        }
        this.setStartInfo(e);
        this.setSliderLastInfo(e);
        //阻止默认滚动行为
        e.preventDefault();
    };

    GestureEvent.prototype.getSliderInfo = function getSliderInfo() {
        var absX = Math.abs(this.lastX - this.startX);
        var absY = Math.abs(this.lastY - this.startY);
        var moveTime = Date.now() - this.startTime;
        var direction = absX > absY ? "X" : "Y";
        var positionInfo = {
            x: this.lastX - this.startX >= 0 ? 'right' : 'left',
            y: this.lastY - this.startY >= 0 ? 'down' : 'up'
        };
        return {
            moveTime: moveTime,
            positionInfo: positionInfo,
            direction: direction,
            moveX: absX,
            moveY: absY,
            startX: this.startX,
            startY: this.startY,
            lastX: this.lastX,
            lastY: this.lastY
        };
    };

    GestureEvent.prototype._touchMove = function _touchMove(e) {
        this.setSliderLastInfo(e);
        var getSliderInfo = this.getSliderInfo();
        //触发swipeMove
        this.trigger('swipeMove', [getSliderInfo, e.target]);
        //阻止默认滚动行为
        e.preventDefault();
    };

    GestureEvent.prototype._touchEnd = function _touchEnd(e) {

        //阻止默认滚动行为
        e.preventDefault();
        this.startX = this.startY = this.lastX = this.lastY = 0;
    };

    return GestureEvent;
})(_EventProtoJs2['default']);

exports['default'] = GestureEvent;
module.exports = exports['default'];