/**
 * Created by slashhuang on 16/5/22.
 * 主程序入口
 */

import Slider from './Slider.js';
import GestureEvent from './GestureEvent.js';

if(window['phoenix-ui']){
    window['phoenix-ui']['Slider']
}else{
    window['Slider']=Slider
};
Slider.GestureEvent=GestureEvent;
module.exports=Slider;
