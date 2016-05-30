require('../demo.less');

import Slider from '../../src/index.js';
/**
 * demo入口
 */
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

