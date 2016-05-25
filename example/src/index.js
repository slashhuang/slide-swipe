import Slider from '../../src/index.js';
/**
 * 测试普通横向滑动模块
 */
var Node = document.getElementById('horizontal-no-ball');
var NodeInstance = new Slider(Node);

/**
 * 测试横向滑动模块
 */
var Node1 = document.getElementById('vertical');
var Node1Options={
    direction:'vertical',//滑动方向
    loop:true,//是否滑动循环
    indicator:{//提示框
        indicatorContainerId:'vertical-indicator',//提示框的容器id
        activeCssName:'indicator-active'//激活图片对应的class名字
    }
};
var verticalInstance = new Slider(Node1,Node1Options);

/**
 * 测试竖向滑动模块
 */
var Node2 = document.getElementById('horizontal');
var Node2Options={
    direction:'horizontal',//滑动方向
    loop:false,//是否滑动循环
    indicator:{//提示框
        indicatorContainerId:'horizontal-indicator',//提示框的容器id
        activeCssName:'indicator-active'//激活图片对应的class名字
    }
};
var horizontalInstance = new Slider(Node2,Node2Options);
/**
 * 测试自动播放方式
 */
var autoNode = document.getElementById('auto-play');
var autoNodeOptions={
    autoPlay:true,//是否自动播放
    duration:1500,//自动播放时间间隔
    loop:true,
    indicator:{//提示框
        indicatorContainerId:'auto-indicator',//提示框的容器id
        activeCssName:'indicator-active'//激活图片对应的class名字
    }
};
var autoInstance = new Slider(autoNode,autoNodeOptions);
