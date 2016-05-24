import Slider from '../../src/index.js';
var verticalNode = document.getElementById('vertical');
var horizontalNode = document.getElementById('horizontal');
var verticalNodeOptions={
    swipeGap:300,//每次滑动的距离
    swipeLength:3,//子元素个数
    direction:'vertical',//滑动方向
    loop:true//是否滑动循环
};
var horizontalNodeOptions={
    swipeGap:300,//每次滑动的距离
    swipeLength:3,//子元素个数
    direction:'horizontal',//滑动方向
    loop:false//是否滑动循环
};
var verticalInstance = new Slider(verticalNode,verticalNodeOptions);
var horizontalInstance = new Slider(horizontalNode,horizontalNodeOptions);
