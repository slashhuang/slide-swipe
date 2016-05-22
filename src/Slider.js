/**
 * Created by slashhuang on 16/5/22.
 */

import GestureEvent from './GestureEvent.js';
export default class Slider extends GestureEvent{
    constructor(ele,options){
        super(ele,options);
        /**
         * 配置信息
         */
        this.options=options;
    }
}