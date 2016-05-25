import Slider from '../../src/index.js';
/**
 * 测试普通横向滑动模块
 * @type {{direction: string, loop: boolean}}
 */
var horizontaNoBalllNode = document.getElementById('horizontal-no-ball');
var horizontalNoBallInstance = new Slider(horizontaNoBalllNode);

/**
 * 测试横向滑动模块
 * @type {{direction: string, loop: boolean}}
 */
var verticalNode = document.getElementById('vertical');
var verticalNodeOptions={
    direction:'vertical',//滑动方向
    loop:true,//是否滑动循环
    indicator:{//提示框
        indicatorContainerId:'vertical-indicator',//提示框的容器
        activeCssName:'indicator-active-color'//下面的图片提示
    }
};
var verticalInstance = new Slider(verticalNode,verticalNodeOptions);

/**
 * 测试竖向滑动模块
 * @type {{direction: string, loop: boolean}}
 */
var horizontalNode = document.getElementById('horizontal');
var horizontalNodeOptions={
    direction:'horizontal',//滑动方向
    loop:false,//是否滑动循环
    indicator:{//提示框
        indicatorContainerId:'horizontal-indicator',//提示框的容器
        activeCssName:'indicator-active-color'//下面的图片提示
    }
};
var horizontalInstance = new Slider(horizontalNode,horizontalNodeOptions);
/**
 * 测试自动播放方式
 * @type {{direction: string, loop: boolean}}
 */
var autoNode = document.getElementById('auto-play');
var autoNodeOptions={
    autoPlay:true,//是否自动播放
    duration:1500,//自动播放时间间隔
    loop:true,
    indicator:{//提示框
        indicatorContainerId:'auto-indicator',//提示框的容器
        activeCssName:'indicator-active-color'//下面的图片提示
    }
};
var autoInstance = new Slider(autoNode,autoNodeOptions);
