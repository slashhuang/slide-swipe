/**
 * Created by slashhuang on 16/5/22.
 * 主程序入口
 */

import Slider from './Slider.js';
import GestureEvent from './GestureEvent.js';
(function(root){
    root.Slider=Slider;
}(typeof window !== "undefined" ? window : this));
Slider.GestureEvent=GestureEvent;
module.exports=Slider;
