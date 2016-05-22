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

	/**
	 * Created by slashhuang on 16/5/22.
	 * 主程序入口
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _SliderJs = __webpack_require__(2);

	var _SliderJs2 = _interopRequireDefault(_SliderJs);

	if (window['phoenix-ui']) {
	    window['phoenix-ui']['Slider'];
	} else {
	    window['Slider'] = _SliderJs2['default'];
	}
	module.exports = _SliderJs2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _GestureEventJs = __webpack_require__(3);

	var _GestureEventJs2 = _interopRequireDefault(_GestureEventJs);

	var Slider = (function (_GestureEvent) {
	  _inherits(Slider, _GestureEvent);

	  function Slider(ele, options) {
	    _classCallCheck(this, Slider);

	    _GestureEvent.call(this, ele, options);
	    /**
	     * 配置信息
	     */
	    this.options = options;
	  }

	  return Slider;
	})(_GestureEventJs2['default']);

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 3 */
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

	var _EventProtoJs = __webpack_require__(4);

	var _EventProtoJs2 = _interopRequireDefault(_EventProtoJs);

	/**
	 * 引入工具类
	 */

	var _utilsUtilsJs = __webpack_require__(6);

	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);

	var _utilsWarningJs = __webpack_require__(5);

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

/***/ },
/* 4 */
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

	var _utilsWarningJs = __webpack_require__(5);

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
	        var typeList = this.eventList[type];
	        if (!!typeList) {
	            typeList.push(func);
	        } else {
	            typeList = [func];
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
/* 5 */
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
/* 6 */
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