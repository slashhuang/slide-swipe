# slide-swipe
> 轻量级的移动端开发手势管理系统
> 可以轻松结合react、jQuery等做二次封装

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

## 点评交易后台FE基于slide-swipe开发的react滑动组件ph-swipe
``` javascript
    npm install ph-swipe
     import React,{Component} from 'react';
       import PhSwipe from 'ph-swipe';
       import {render,findDOMNode} from 'react-dom';
       export default class PhSwipeDemo extends Component {
           constructor(props, context) {
               super(props, context);
           }
           render(){
               let imgArr=[
                   'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                   'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
                   'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
                   'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
               ];
               /**
                * 测试横向滑动模块[auto swipe]
                */
               var Node3Options={
                   imgArr:imgArr,
                   direction:'horizontal',//滑动方向
                   autoPlay:true,
                   duration:1500,
                   loop:true,//是否滑动循环
                   activeClass:'yellow',//自定义active的样式
               };
               /**
                * 垂直自动播放方式[auto vertical swipe]
                */
               var node5Options={
                   imgArr:imgArr,
                   direction:'vertical',
                   autoPlay:true,//是否自动播放
                   loop:true,
                   activeClass:'purple',//自定义active的样式
               };
               return (<div>
                   <PhSwipe {...Node3Options}></PhSwipe>
                   <div className='hint'>自动循环左右滑动</div>   
                   <PhSwipe {...node5Options} style={{height:'150px'}}></PhSwipe>
                   <div className='hint'>自动循环上下滑动</div>
               </div>)
           }
       }
       render(<PhSwipeDemo/>,document.getElementById('root'))
```

## 单独使用[使用代码]
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

## unit test[单元测试]
``` bash
    npm run test
```