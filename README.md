# slide-swipe
> 轻量级的移动端开发手势管理系统

## 手势系统【在H5界面实现原生的手势系统】
- swipeLeft: 左滑动
- swipeRight: 右滑动
- swipeUp: 上滑动
- swipeDown: 下滑动
- fastTap: 快于ios系统的点击
- longPress: 长按

## 开发规划
|- 手势类父类(EventProto，用于自定义事件)  
|- eventList (dom事件管理对象，需要在子类中执行super操作以继承)  
|- on(type,func,boolean) (注册subscribe)  
|- off(type,func) (移除监听remove)  
|- trigger(type[,callback]) (触发事件)

|- 手势类(GestureEvent封装touchEvent)    
|- bind(type,func) (挂载原生事件)  
|- unbind(type,func) (移除回调函数) 
  
|- Slider手势类实例
|- 封装手势系统的所有事件

## UI展示
>![slide-swipe展示](/example/img/slide-swipe.gif)

## 命令
```bash
   npm install slide-swipe
```
## 使用[演示代码]
```javascript
    import Slider from 'slide-swipe';
    var NodeList=document.getElementsByClassName('container');
    /**
     * 测试普通横向滑动模块
     */
    var NodeInstance = new Slider(NodeList[0]);
    /**
     * 测试横向滑动模块
     */
    var Node1Options={
        direction:'horizontal',//滑动方向
        autoPlay:true,
        duration:1500,
        loop:true,//是否滑动循环
        containerClassName:'img-list',//滑动容器的className值
        indicatorClassName:'img-indicator',//滑动容器下方小圆点容器className值
        activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
    };
    var verticalInstance = new Slider(NodeList[1],Node1Options);   
    /**
     * 测试竖向滑动模块
     */
    var Node2Options={
        direction:'horizontal',//滑动方向
        loop:false,//是否滑动循环
        containerClassName:'img-list',//滑动容器的className值
        indicatorClassName:'img-indicator',//滑动容器下方小圆点容器className值
        activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
    };
    var horizontalInstance = new Slider(NodeList[2],Node2Options);
    /**
     * 测试自动播放方式
     */
    var node3Options={
        direction:'vertical',
        autoPlay:true,//是否自动播放
        duration:1500,//自动播放时间间隔
        loop:true,
        containerClassName:'img-list',//滑动容器的className值
        indicatorClassName:'img-vertical-indicator',//滑动容器下方小圆点容器className值
        activeClass:'indicator-active'//滑动容器下方小圆点激活的className值
    };
    var autoInstance = new Slider(NodeList[3],node3Options);
```

## 单元测试
``` bash
    npm run test
```