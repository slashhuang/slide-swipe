/**
 * Created by slashhuang on 16/5/22.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _GestureEventJs = require('./GestureEvent.js');

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