(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcIndexJs = __webpack_require__(2);

	var _srcIndexJs2 = _interopRequireDefault(_srcIndexJs);

	var NodeList = document.getElementsByClassName('container');

	/**
	 * 测试普通横向滑动模块
	 */
	var NodeInstance = new _srcIndexJs2['default'](NodeList[0]);

	/**
	 * 测试横向滑动模块
	 */
	var Node1Options = {
	  direction: 'horizontal', //滑动方向
	  autoPlay: true,
	  duration: 1500,
	  loop: true, //是否滑动循环
	  containerClassName: 'img-list', //滑动容器的className值
	  indicatorClassName: 'img-indicator', //滑动容器下方小圆点容器className值
	  activeClass: 'indicator-active' //滑动容器下方小圆点激活的className值
	};
	var verticalInstance = new _srcIndexJs2['default'](NodeList[1], Node1Options);

	/**
	 * 测试竖向滑动模块
	 */
	var Node2Options = {
	  direction: 'horizontal', //滑动方向
	  loop: false, //是否滑动循环
	  containerClassName: 'img-list', //滑动容器的className值
	  indicatorClassName: 'img-indicator', //滑动容器下方小圆点容器className值
	  activeClass: 'indicator-active' //滑动容器下方小圆点激活的className值
	};
	var horizontalInstance = new _srcIndexJs2['default'](NodeList[2], Node2Options);
	/**
	 * 测试自动播放方式
	 */
	var node3Options = {
	  direction: 'vertical',
	  autoPlay: true, //是否自动播放
	  duration: 1500, //自动播放时间间隔
	  loop: true,
	  containerClassName: 'img-list', //滑动容器的className值
	  indicatorClassName: 'img-vertical-indicator', //滑动容器下方小圆点容器className值
	  activeClass: 'indicator-active' //滑动容器下方小圆点激活的className值
	};
	var autoInstance = new _srcIndexJs2['default'](NodeList[3], node3Options);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 主程序入口
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _SliderJs = __webpack_require__(3);

	var _SliderJs2 = _interopRequireDefault(_SliderJs);

	var _GestureEventJs = __webpack_require__(5);

	var _GestureEventJs2 = _interopRequireDefault(_GestureEventJs);

	(function (root) {
	  root.Slider = _SliderJs2['default'];
	})(typeof window !== "undefined" ? window : undefined);
	_SliderJs2['default'].GestureEvent = _GestureEventJs2['default'];
	module.exports = _SliderJs2['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * Slider为GestureEvent的具体使用实例
	 * 用户可以自行根据GestureEvent扩展自己对应手势的回调函数
	 */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsWarningJs = __webpack_require__(4);

	var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

	var _GestureEventJs = __webpack_require__(5);

	var _GestureEventJs2 = _interopRequireDefault(_GestureEventJs);

	var Slider = (function (_GestureEvent) {
	    _inherits(Slider, _GestureEvent);

	    _createClass(Slider, null, [{
	        key: 'defaultOption',
	        value: {
	            direction: 'horizontal', //默认横向滚动
	            autoPlay: false, //默认不自滚动
	            loop: false, //默认不循环
	            containerClassName: 'img-list' //滑动容器的className值
	        },

	        /**
	         * 初始化参数配置
	         * @param ele 滑动元素container
	         * @param option 组件参数
	         */
	        enumerable: true
	    }]);

	    function Slider(ele) {
	        var option = arguments.length <= 1 || arguments[1] === undefined ? Slider.defaultOption : arguments[1];

	        _classCallCheck(this, Slider);

	        var containerClassName = option.containerClassName;
	        //滑动容器的className值
	        var targetNode = ele.getElementsByClassName(containerClassName)[0];
	        if (!(targetNode && targetNode.children && targetNode.children.length)) {
	            _utilsWarningJs2['default']("please pass `containerClassName` as a  key to option which is the 2nd argument of  `Slider`");
	            return;
	        }
	        _GestureEvent.call(this, targetNode, option);
	        var that = this;
	        /**
	         * dom节点信息
	         */
	        this.node = targetNode;
	        this.parentNode = ele;
	        /**
	         * 配置信息
	         */
	        this.options = option;
	        /**
	         * 如果用户决定自定义手势事件，则覆盖预先定义好的
	         * 这个功能暂时不用扩展了
	         */
	        this.bindDefinedEvents();

	        /**
	         * 自动循环播放
	         */
	        if (option.autoPlay) {
	            (function () {
	                var swipeType = option.direction == 'horizontal' ? 'swipeLeft' : 'swipeUp';
	                setInterval(function () {
	                    that.trigger(swipeType);
	                }, option.duration || 1000);
	            })();
	        }
	        /**
	         * currentIndex:当前数据
	         * swipeLastIndex:swipe子元素的最后序数号
	         * swipeGap: 每次滑动的距离
	         */
	        this.animationInfo = {
	            currentIndex: 0,
	            swipeLastIndex: this.node.children.length - 1, //最后子元素的序数号
	            swipeGap: option['swipeGap'] || (this.options.direction == 'horizontal' ? this.node['offsetWidth'] : this.node['offsetHeight']) / this.node.children.length //每次滑动宽度/每次滑动高度
	        };
	    }

	    Slider.prototype.bindDefinedEvents = function bindDefinedEvents() {
	        var that = this;
	        var SwipeArr = this.options.direction == 'horizontal' ? ['swipeLeft', 'swipeRight'] : ['swipeUp', 'swipeDown'];
	        /**
	         * 挂载事件
	         * 先支持swipe事件，类似longTap之类的之后封装
	         */
	        SwipeArr.forEach(function (eventName) {
	            that.on(eventName, that[eventName]);
	        });
	    };

	    Slider.prototype.renderIndicator = function renderIndicator(currentIndex) {
	        //如果用户定义了indicator,则执行indicator的逻辑
	        var _options = this.options;
	        var indicatorClassName = _options.indicatorClassName;
	        var activeClass = _options.activeClass;

	        if (!(indicatorClassName && activeClass)) {
	            _utilsWarningJs2['default']('if you want to render indicator, you must assign value to "containerClassName"' + 'and "activeClass" ');
	        } else {
	            var indicatorNode = this.parentNode.getElementsByClassName(indicatorClassName)[0];
	            var children = indicatorNode.children;
	            for (var i = 0; i < children.length; i++) {
	                children[i]['classList'].remove(activeClass);
	            }
	            children[currentIndex]['classList'].add(activeClass);
	        }
	    };

	    Slider.prototype.renderStyle = function renderStyle(info) {
	        var translateFormat = this.options.direction == 'horizontal' ? 'translate3d(x,0,0)' : 'translate3d(0,y,0)';
	        var replaceString = this.options.direction == 'horizontal' ? 'x' : 'y';
	        var currentIndex = info.currentIndex;
	        var swipeGap = info.swipeGap;
	        var _options2 = this.options;
	        var indicatorClassName = _options2.indicatorClassName;
	        var activeClass = _options2.activeClass;

	        //在渲染样式的时机，渲染下面的小圆
	        if (indicatorClassName && activeClass) {
	            this.renderIndicator(currentIndex);
	        }
	        return translateFormat.replace(replaceString, "-" + currentIndex * swipeGap + 'px');
	    };

	    /**
	     * 按住时间长达1000ms，并且位移小于5,触发触发长按事件
	     */

	    Slider.prototype.longTap = function longTap() {
	        alert('longTapping');
	    };

	    /**
	     * swipe系列手指移动超过预设值
	     * 手指移动事件小于1500ms
	     * 手指滑动至少5个单位
	     */
	    /**
	     * {"moveName":"Left","moveTime":162,
	     * "positionInfo":{"x":"Left","y":"Down"},
	     * "direction":"x","moveX":20.96600341796875,"moveY":0,
	     * "startX":198.48300170898438,"startY":64.2969970703125,
	     * "lastX":177.51699829101562,"lastY":64.2969970703125}
	     * @param e
	     * @param info
	     */

	    Slider.prototype.swipeRight = function swipeRight() {
	        if (this.animationInfo.currentIndex > 0) {
	            this.animationInfo.currentIndex--;
	            /**
	             * 如果有循环参数，则在头部左移回归尾部
	             */
	        } else if (this.options.loop) {
	                this.animationInfo.currentIndex = this.animationInfo['swipeLastIndex'];
	            }
	        this.ele.style["-webkit-transform"] = this.renderStyle(this.animationInfo);
	    };

	    Slider.prototype.swipeLeft = function swipeLeft() {
	        if (this.animationInfo.currentIndex < this.animationInfo['swipeLastIndex']) {
	            this.animationInfo.currentIndex++;
	        } else if (this.options.loop) {
	            this.animationInfo.currentIndex = 0;
	        }
	        this.ele.style["-webkit-transform"] = this.renderStyle(this.animationInfo);
	    };

	    Slider.prototype.swipeUp = function swipeUp(e, info) {
	        this['swipeLeft'](e, info);
	    };

	    Slider.prototype.swipeDown = function swipeDown(e, info) {
	        this['swipeRight'](e, info);
	    };

	    /**
	     * 恢复原状
	     */

	    Slider.prototype.swipeNotMove = function swipeNotMove() {
	        alert('swipeNotMove');
	    };

	    /**
	     * 快速点击事件
	     * 按住时间小于150ms，并且位移小于5
	     */

	    Slider.prototype.fastTap = function fastTap() {
	        this.warningForTap();
	        alert(1);
	    };

	    /**
	     * 双击事件与fastTap不兼容
	     * 两次点击事件间隔小于400ms，触发双击事件
	     */

	    Slider.prototype.dbTap = function dbTap() {
	        this.warningForTap();
	    };

	    /**
	     * 不能同时处理快速点击和双击
	     */

	    Slider.prototype.warningForTap = function warningForTap() {
	        if (this.eventList['dbTap'] && this.eventList['fastTap']) {
	            _utilsWarningJs2['default']('you can\'t add event "dbTap" and "fastTap" at the same time,if you really want to,\n                    please use click instead of fastTap');
	        }
	    };

	    return Slider;
	})(_GestureEventJs2['default']);

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 警告报错处理
	 */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (message) {
	    if (typeof console !== 'undefined') {
	        console.error(message);
	    }
	    try {
	        throw new Error(message);
	    } catch (x) {}
	};

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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

	var _EventProtoJs = __webpack_require__(6);

	var _EventProtoJs2 = _interopRequireDefault(_EventProtoJs);

	/**
	 * 引入工具类
	 */

	var _utilsUtilsJs = __webpack_require__(7);

	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);

	var _utilsWarningJs = __webpack_require__(4);

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
	        /**p
	         * 自定义配置属性
	         * @type {number}
	         */
	        this.defaultOptions = {
	            triggerDistance: 10 //至少手指移动10px
	        };
	        /**
	         * 绑定事件【目前支持如下事件列表】
	         *'swipeLeft',
	         *'swipeRight',
	         *'swipeUp',
	         *'swipeDown',
	         *'swipeNotMove',
	         *'fastTap',
	         *'dbTap',
	         *'longTap'
	         */
	        this.bindEvents();
	        document.addEventListener('touchmove', function () {});
	    }

	    GestureEvent.prototype.bind = function bind(type, func) {
	        this.ele.addEventListener(type, func, false);
	    };

	    GestureEvent.prototype.unbind = function unbind(type, func) {
	        this.ele.removeEventListener(type, func);
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

	    GestureEvent.prototype.getSliderInfo = function getSliderInfo() {
	        var absX = Math.abs(this.lastX - this.startX);
	        var absY = Math.abs(this.lastY - this.startY);
	        var moveTime = Date.now() - this.startTime;
	        var direction = absX > absY ? "x" : "y";
	        var positionInfo = {
	            x: this.lastX - this.startX >= 0 ? 'Right' : 'Left',
	            y: this.lastY - this.startY >= 0 ? 'Down' : 'Up'
	        };
	        return {
	            moveName: positionInfo[direction],
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

	    GestureEvent.prototype._touchStart = function _touchStart(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        //这里只允许单指操作，不会影响鼠标操作
	        if (e.touches && e.touches.length > 1) {
	            return false;
	        }
	        this.setStartInfo(e);
	        this.setSliderLastInfo(e);
	    };

	    GestureEvent.prototype._touchMove = function _touchMove(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        this.setSliderLastInfo(e);
	        var getSliderInfo = this.getSliderInfo();
	        //@TODO 是否触发swipeMove有待商榷
	        this.trigger('swipeMove', [e.target, getSliderInfo]);
	    };

	    GestureEvent.prototype._touchEnd = function _touchEnd(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        //debugger;
	        //移除dom滚动事件
	        //this.stopDocMove(false);
	        /**
	         * 手指信息
	         * @type {{moveTime, positionInfo, direction, moveX, moveY, startX, startY, lastX, lastY}|*}
	         */
	        var SliderInfo = this.getSliderInfo();
	        var distance = this.defaultOptions.triggerDistance;
	        var triggerCondition = {
	            /**
	             * 触发快速点击事件
	             */
	            'fastTap': SliderInfo.moveTime < 100 && SliderInfo.moveX < 5 && SliderInfo.moveY < 5,
	            /**
	             * x轴和y轴有一个方向滑动距离够===>>>>触发swipe事件
	             */
	            'swipe': SliderInfo.moveTime > 100 && SliderInfo.moveTime < 1500 && (SliderInfo['moveX'] > distance || SliderInfo['moveY'] > distance),
	            /**
	             * 长按和手指不移动，触发longTap事件
	             */
	            "longTap": SliderInfo.moveTime > 1500 && SliderInfo.moveX < 5 && SliderInfo.moveY < 5
	        };
	        /**
	         * 事件信息
	         */
	        if (triggerCondition['fastTap']) {
	            this.trigger('fastTap', [SliderInfo, e.target]);
	        } else if (triggerCondition['longTap']) {
	            this.trigger('longTap');
	        } else if (triggerCondition['swipe']) {
	            var eventTypeName = SliderInfo['moveName'];
	            //触发swipeLeft,swipeRight,swipeUp,swipeDown
	            this.trigger('swipe' + eventTypeName, [e.target, SliderInfo]);
	        } else {
	            /**
	             * 什么条件都不满足,触发复原事件
	             */
	            this.trigger('swipeNotMove', [e.target, SliderInfo]);
	        }
	        //回滚实例数据
	        this.startX = this.startY = this.lastX = this.lastY = 0;
	    };

	    /**
	     * 挂载事件
	     */

	    GestureEvent.prototype.bindEvents = function bindEvents() {
	        var that = this;
	        var touchEvents = {
	            'touchstart': {
	                callback: that._touchStart.bind(that)
	            },
	            'touchmove': {
	                callback: that._touchMove.bind(that)
	            },
	            'touchend': {
	                callback: that._touchEnd.bind(that)
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
	                    that.bind('mousemove', that._touchMove.bind(that));
	                }
	            },
	            'mouseup': {
	                callback: function callback(e) {
	                    that._touchEnd(e);
	                    that.unbind('mousemove', that._touchMove.bind(that));
	                }
	            }
	        };
	        var finalEvents = _utilsUtilsJs2['default'].isMobile() ? touchEvents : mouseEvents;
	        for (var key in finalEvents) {
	            this.bind(key, finalEvents[key].callback);
	        }
	    };

	    return GestureEvent;
	})(_EventProtoJs2['default']);

	exports['default'] = GestureEvent;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 手势管理系统基类
	 * 请查看单元测试EventProto.js
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsWarningJs = __webpack_require__(4);

	var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

	var EventProto = (function () {
	    function EventProto() {
	        _classCallCheck(this, EventProto);

	        /**
	         * 实例事件存储字典
	         * @type {{}}
	         */
	        this.eventList = {};
	    }

	    /**
	     * 注册事件类型单例
	     * @param type 事件类型
	     * @param func 回调函数
	     */

	    EventProto.prototype.on = function on(type, func) {
	        if (typeof func != 'function') {
	            _utilsWarningJs2['default']('you should pass a function as "on" parameter ');
	        } else {
	            if (!!this.eventList[type]) {
	                this.eventList[type].push(func);
	            } else {
	                this.eventList[type] = [func];
	            }
	        }
	    };

	    EventProto.prototype.off = function off(type, func) {
	        var typeList = this.eventList[type];
	        if (!!typeList) {
	            var targetIndex = typeList.indexOf(func);
	            typeList.splice(targetIndex, 1);
	        } else {
	            _utilsWarningJs2['default']('you haven\'t initialized event : ' + type + ',please use "on" to initialize your event ');
	        }
	    };

	    /**
	     * 触发事件
	     * @param type 事件类型
	     * @param args 回调函数参数数组
	     */

	    EventProto.prototype.trigger = function trigger(type, args) {
	        var typeList = this.eventList[type];
	        /**
	         * trigger没有对应的回调函数，则默认不做任何事
	         */
	        if (!!typeList) {
	            for (var i = 0; i < typeList.length; i++) {
	                typeList[i].apply(this, args);
	            }
	        }
	    };

	    return EventProto;
	})();

	exports['default'] = EventProto;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/5/22.
	 */

	"use strict";

	exports.__esModule = true;
	var utils = {
	  isMobile: function isMobile() {
	    /**
	     * 使用TouchEvent来实验是否为移动端
	     */
	    try {
	      document.createEvent("TouchEvent");
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	};
	exports["default"] = utils;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;