/**
 * Created by slashhuang on 16/5/22.
 * 手势管理系统基类
 * 请查看单元测试EventProto.js
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsWarningJs = require('./utils/warning.js');

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