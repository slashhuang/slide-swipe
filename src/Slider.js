/**
 * Created by slashhuang on 16/5/22.
 * Slider为GestureEvent的具体使用实例
 * 用户可以自行根据GestureEvent扩展自己对应手势的回调函数
 */
import warning from './utils/warning.js';
import GestureEvent from './GestureEvent.js';
export default class Slider extends GestureEvent{
    /**
     * slider参数配置
     * @type {{direction: string, loop: string, swipeGap: number, swipeLength: number}}
     */
    static defaultOptions={
        direction:'horizontal',//默认横向滚动
        autoPlay:false,//默认不自滚动
        loop:false,//默认不循环
        swipeGap:0,//每次滑动的距离
        swipeLength:0,//子元素个数
        indicator:null//slider下面的小圆点对象
    };
    /**
     * 初始化参数配置
     * @param ele 滑动元素container
     * @param option 组件参数
     */
    constructor(ele,option){
        if(!(ele && ele.children && ele.children.length)){
            warning("please use the parentNode of image list as 1st parameter for Slider");
            return;
        }
        let options= Object.assign({},Slider.defaultOptions,option);
        super(ele,options);
        let that=this;
        /**
         * 配置信息
         */
        this.options=options;
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
         * 自动循环播放
         */
        if(options.autoPlay){
            setInterval(()=>{
                that.trigger('swipeLeft')
            },options.duration||1000)
        }
        /**
         * currentIndex:当前数据
         * swipeLastIndex:swipe子元素的最后序数号
         * swipeGap: 每次滑动的距离
         */
        this.animationInfo={
            currentIndex:0,
            swipeLastIndex:ele.children.length-1,//最后子元素的序数号
            swipeGap:options['swipeGap']||
                    (this.options.direction=='horizontal'?
                    ele['offsetWidth']:ele['offsetHeight'])/(ele.children.length),//每次滑动宽度/每次滑动高度
        };
    }
    bindDefinedEvents(){
        let that = this;
        let SwipeArr=this.options.direction=='horizontal'?[ 'swipeLeft', 'swipeRight']:['swipeUp','swipeDown'];
        /**
         * 挂载事件
         * 先支持swipe事件，别的longTap之类的之后封装
         */
        SwipeArr.forEach(
            (eventName)=>{
                that.on(eventName,that[eventName]);
            }
        );
    }
    renderIndicator(currentIndex){
        //如果用户定义了indicator,则执行indicator的逻辑
        let {indicatorContainerId,activeCssName}=this.options['indicator'];
        if(!(indicatorContainerId&&activeCssName)){
            warning('if you want to render indicator, you must assign value to "indicatorContainerId"' +
                'and "activeCssName" ');
        }else{
            let indicatorNode = document.getElementById(indicatorContainerId);
            let children = indicatorNode.children;
            for(let i=0;i<children.length;i++){
                children[i]['classList'].remove(activeCssName);
            }
            children[currentIndex]['classList'].add(activeCssName);
        }
    }
    renderStyle(info){
        let translateFormat =this.options.direction=='horizontal'? 'translate3d(x,0,0)':'translate3d(0,y,0)';
        let replaceString=this.options.direction=='horizontal'?'x':'y';
        let {currentIndex,swipeGap}=info;
        //在渲染样式的时机，渲染下面的导航
        if(this.options['indicator']){
            this.renderIndicator(currentIndex);
        }
        return translateFormat.replace(replaceString,"-"+currentIndex*swipeGap+'px');
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
    /**
     * {"moveName":"Left","moveTime":162,
     * "positionInfo":{"x":"Left","y":"Down"},
     * "direction":"x","moveX":20.96600341796875,"moveY":0,
     * "startX":198.48300170898438,"startY":64.2969970703125,
     * "lastX":177.51699829101562,"lastY":64.2969970703125}
     * @param e
     * @param info
     */
    swipeRight(){
        if(this.animationInfo.currentIndex>0){
            this.animationInfo.currentIndex--;
            /**
             * 如果有循环参数，则在头部左移回归尾部
             */
        }else if(this.options.loop){
            this.animationInfo.currentIndex=this.animationInfo['swipeLastIndex'];
        }
        this.ele.style["-webkit-transform"]=this.renderStyle(this.animationInfo);
    }
    swipeLeft(){
        if(this.animationInfo.currentIndex<this.animationInfo['swipeLastIndex']){
            this.animationInfo.currentIndex++
        }else if(this.options.loop){
            this.animationInfo.currentIndex=0;
        }
        this.ele.style["-webkit-transform"]=this.renderStyle(this.animationInfo);
    }
    swipeUp(e,info){
       this['swipeLeft'](e,info);
    }
    swipeDown(e,info){
        this['swipeRight'](e,info);
    }
    /**
     * 恢复原状
     */
    swipeNotMove(){
        alert('swipeNotMove')
    }
    /**
     * 快速点击事件
     * 按住时间小于150ms，并且位移小于5
     */
    fastTap(){
        this.warningForTap();
        alert(1)
    }
    /**
     * 双击事件与fastTap不兼容
     * 两次点击事件间隔小于400ms，触发双击事件
     */
    dbTap(){
        this.warningForTap();
    }
    /**
     * 不能同时处理快速点击和双击
     */
    warningForTap(){
        if(this.eventList['dbTap']&&this.eventList['fastTap']){
            warning(`you can't add event "dbTap" and "fastTap" at the same time,if you really want to,
                    please use click instead of fastTap`);
        }
    }
}