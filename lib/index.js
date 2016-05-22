/**
 * Created by slashhuang on 16/5/22.
 * 主程序入口
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SliderJs = require('./Slider.js');

var _SliderJs2 = _interopRequireDefault(_SliderJs);

if (window['phoenix-ui']) {
    window['phoenix-ui']['Slider'];
} else {
    window['Slider'] = _SliderJs2['default'];
}
module.exports = _SliderJs2['default'];