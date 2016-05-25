# slide-swipe
> 轻量级的移动端开发手势管理系统

## 手势系统【在H5界面实现原生的手势系统】
- swipeLeft: 左滑动
- swipeRight: 右滑动
- swipeUp: 上滑动
- swipeDown: 下滑动
- fastTap: 快于ios系统的点击
- dbTap: 双击
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

##使用
```bash
  cnpm install slide-swipe
```
## example[demo中的使用代码]
```javascript
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
            activeCssName:'indicator-active-color'//激活图片对应的class名字
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
            activeCssName:'indicator-active-color'//激活图片对应的class名字
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
            activeCssName:'indicator-active-color'//激活图片对应的class名字
        }
    };
    var autoInstance = new Slider(autoNode,autoNodeOptions);
```

## 单元测试
``` bash
    npm run test
```