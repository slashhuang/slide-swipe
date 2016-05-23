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
|-事件父类(EventProto，用于自定义事件)  
|- eventList (dom事件管理对象，需要在子类中执行super操作以继承)  
|- on(type,func,boolean) (注册subscribe)  
|- off(type,func) (移除监听remove)  
|- trigger(type[,callback]) (触发事件)

|-手势事件(GestureEvent)    
|- bind(type,func) (挂载原生事件)  
|- unbind(type,func) (移除回调函数)   

   
## 单元测试
``` bash
    npm run test
```

## 0.1.1版本已经完成父类的构造，实例化的属性还在开发中