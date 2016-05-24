/**
 * Created by slashhuang on 16/5/22.
 * Slider为GestureEvent的具体使用实例
 * 用户可以自行根据GestureEvent扩展自己对应手势的回调函数
 */
import warning from './utils/warning.js';
import GestureEvent from './GestureEvent.js';
export default class Slider extends GestureEvent{
    constructor(ele,options){
        super(ele,options);
        /**
         * 如果用户决定自定义手势事件，则覆盖预先定义好的
         */
        if(!options.bindEvents){
            this.bindDefinedEvents();
        }else{
            for(let key in options.bindEvents){
                this.on(key,options.bindEvents[key]);
            }
        }
        /**
         * 配置信息
         */
        this.options=options;
    }
    bindDefinedEvents(){
        let that = this;
        let EventName=[
            'swipeLeft',
            'swipeRight',
            'swipeUp',
            'swipeDown',
            'swipeNotMove',
            //'fastTap',
            //'dbTap',
            'longTap'
        ];
        /**
         * 挂载事件
         */
        EventName.forEach(
            (eventName)=>{
                that.on(eventName,that[eventName]||function(){});
            }
        );
    }
    /**
     * 按住时间长达1000ms，并且位移小于5,触发触发长按事件
     */
    longTap(){
        alert('longTapping');
    }

    /**
     * swipe系列手指移动超过预设值
     * 手指移动事件小于1500ms
     * 手指滑动至少5个单位
     */
    swipeLeft(e,info){
        debugger;
        alert('swipeLeft')
    }
    swipeRight(e,info){
        debugger;
        alert('swipeRight')
    }
    swipeUp(e,info){
        debugger;
        alert('swipeUp')
    }
    swipeDown(e,info){
        debugger;
        alert('swipeDown')
    }
    /**
     * 恢复原状
     */
    swipeNotMove(){
        alert('swipeNotMove')
    }
    /**
     * 不能同时处理快速点击和双击
     */
    warningForTap(){
        if(this.eventList['dbTap']&&this.eventList['dbTap']){
            warning(`you can't add event "dbTap" and "fastTap" at the same time,if you really want to,
                    please use click instead of fastTap`);
        }
    }
    /**
     * 快速点击事件
     * 按住时间小于150ms，并且位移小于5
     */
    fastTap(){
        this.warningForTap();
    }
    /**
     * 双击事件与fastTap不兼容
     * 两次点击事件间隔小于400ms，触发双击事件
     */
    dbTap(){
        this.warningForTap();
    }
}