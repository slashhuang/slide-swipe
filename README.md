# slide-swipe
> 原生的轻量级移动端开发手势管理系统

> GestureEvent事件类可以轻松结合react、jQuery等做二次封装

## UI展示
>![slide-swipe展示](/example/img/slide-swipe.gif)

## 手势系统【在H5界面实现原生的手势系统】
- swipeLeft: 左滑动
- swipeRight: 右滑动
- swipeUp: 上滑动
- swipeDown: 下滑动
- fastTap: 快于ios系统的点击
- longPress: 长按

## 命令
```bash
   npm install slide-swipe
   git clone git@github.com:slashhuang/slide-swipe.git
```

## [点评交易后台FE基于slide-swipe开发的react滑动组件ph-swipe](https://github.com/future-team/ph-swipe)

## 单独使用[使用代码]
```javascript
    css代码: <link rel="stylesheet/less" type="text/css" href="../css/index.less" />
    import Slider from 'slide-swipe';
    var NodeList=document.getElementsByClassName('slide-container');
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

## unit test[单元测试]
``` bash
    npm run test
```