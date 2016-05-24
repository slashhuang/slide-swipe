/**
 * Created by slashhuang on 16/5/22.
 * 移动端手势系统入口
 */
/**
 * 引入父类
 */
import EventProto from './EventProto.js';
/**
 * 引入工具类
 */
import utils from './utils/utils.js';
import Warning from './utils/warning.js';
export default class GestureEvent extends EventProto{
    constructor(ele,options){
        super(ele,options);//获取父类实例的eventList
        /**
         * 绑定实例dom节点和配置信息
         */
        this.ele=ele;
        /**p
         * 自定义配置属性
         * @type {number}
         */
        this.defaultOptions={
            triggerDistance:20,//至少手指移动20px
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
        /**
         *  检测目标对象的参数
         * @type {{startX: number, startY: number, lastX: number, lastY: number}}
         */
        let DOMInfo={
            startX : 0,
            startY : 0,
            lastX : 0,
            lastY : 0,
            startTime:Date.now()
        };
        Object.assign(this,DOMInfo);

    }
    bind(type,func){
        this.ele.addEventListener(type,func,false);
    }
    unbind(type,func){
        this.ele.removeEventListener(type,func);
    }
    /**
     * 设置滑动最后的信息
     * @param e
     */
    setSliderLastInfo(e){
        this.lastX = (utils.isMobile() ? e.touches[0].pageX : e.clientX);
        this.lastY = (utils.isMobile() ? e.touches[0].pageY : e.clientY);
    }
    /**
     * 设置滑动初始化的信息
     * @param e
     */
    setStartInfo(e){
        this.startX = (utils.isMobile() ? e.touches[0].pageX : e.clientX);
        this.startY = (utils.isMobile() ? e.touches[0].pageY : e.clientY);
        this.startTime = Date.now();
    }
    getSliderInfo(){
        var absX = Math.abs(this.lastX - this.startX);
        var absY = Math.abs(this.lastY - this.startY);
        var moveTime = Date.now() - this.startTime;
        var direction = absX > absY ? "x" : "y";
        var positionInfo = {
            x: this.lastX - this.startX >= 0 ? 'Right' : 'Left',
            y: this.lastY - this.startY >= 0 ? 'Down' : 'Up'
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
        }
    }
    _touchStart(e){
        //这里只允许单指操作，不会影响鼠标操作
        if (e.touches && e.touches.length > 1) {
            return false;
        }
        this.setStartInfo(e);
        this.setSliderLastInfo(e);
        //阻止默认滚动行为
        e.preventDefault();
    }
    _touchMove(e){
        this.setSliderLastInfo(e);
        let getSliderInfo = this.getSliderInfo();
        //@TODO 是否触发swipeMove有待商榷
        this.trigger('swipeMove',[getSliderInfo,e.target]);
        //阻止默认滚动行为
        e.preventDefault();
    }
    _touchEnd(e){
        /**
         * 手指信息
         * @type {{moveTime, positionInfo, direction, moveX, moveY, startX, startY, lastX, lastY}|*}
         */
        let SliderInfo = this.getSliderInfo();
        let distance= this.defaultOptions.triggerDistance;
        let triggerCondition={
            /**
             * 触发快速点击事件
             */
            'fastTap':SliderInfo.moveTime<150 && SliderInfo.moveX<5 &&SliderInfo.moveY<5,
            /**
             * x轴和y轴有一个方向滑动距离够===>>>>触发swipe事件
             */
            'swipe':SliderInfo.moveTime>150 &&
                    SliderInfo.moveTime<1500 &&
                    ((SliderInfo['moveX']>distance||SliderInfo['moveY']>distance)),
            /**
             * 长按和手指不移动，触发longTap事件
             */
            "longTap":SliderInfo.moveTime>1500 && SliderInfo.moveX<5 &&SliderInfo.moveY<5
        };
        /**
         * 事件信息
         */
        console.log(JSON.stringify(SliderInfo))
        if(triggerCondition['fastTap']){
            this.trigger('fastTap',[SliderInfo,e.target]);
        }else if(triggerCondition['longTap'] ){
            this.trigger('longTap')
        }else if(triggerCondition['swipe']){
            let eventTypeName =  SliderInfo['positionInfo'][SliderInfo['direction']];
            //触发swipeLeft,swipeRight,swipeUp,swipeDown
            this.trigger('swipe'+eventTypeName,[SliderInfo,e.target]);
        }else{
            /**
             * 什么条件都不满足,触发复原事件
             */
            this.trigger('swipeNotMove',[SliderInfo,e.target]);
        }
        //阻止默认滚动行为
        e.preventDefault();
        //回滚实例数据
        this.startX = this.startY = this.lastX = this.lastY = 0;
    }
    /**
     * 挂载事件
     */
    bindEvents(){
        let that =this;
        let touchEvents={
            'touchstart':{
                callback:that._touchStart.bind(that)
            },
            'touchmove':{
                callback:that._touchMove.bind(that)
            },
            'touchend':{
                callback:that._touchEnd.bind(that)
            }
        };
        /**
         * 在mouse事件中取消mousemove单独事件，放在mousedown和mouseup里面
         * @type {{mousedown: {callback: Function}, mouseup: {callback: Function}}}
         */
        let mouseEvents={
            'mousedown':{
                callback:(e)=>{
                    that._touchStart(e);
                    that.bind('mousemove',that._touchMove.bind(that))
                }
            },
            'mouseup':{
                callback:(e)=>{
                    that._touchEnd(e);
                    that.unbind('mousemove',that._touchMove.bind(that))
                }
            }
        };
        let finalEvents = utils.isMobile()?touchEvents:mouseEvents;
        for(let key in finalEvents){
            this.bind(key,finalEvents[key].callback);
        }
    }
}