/**
 * Created by slashhuang on 16/5/22.
 * 手势管理系统基类
 * 请查看单元测试EventProto.js
 */
import Warning from './utils/warning.js';
export default class EventProto {
    constructor() {
        /**
         * 实例事件存储字典
         * @type {{}}
         */
        this.eventList={};
    }
    /**
     * 注册事件类型单例
     * @param type 事件类型
     * @param func 回调函数
     */
    on(type,func){
        let typeList = this.eventList[type];
        if(!!typeList){
            typeList.push(func)
        }
        else{
            typeList=[func];
        }
    }
    off(type,func){
        let typeList = this.eventList[type];
        if(!!typeList){
            let targetIndex = typeList.indexOf(func);
            typeList.splice(targetIndex,1)
        }
        else{
            Warning(`you haven\'t initialized event : ${type},please use "on" to initialize your event `);
        }
    }

    /**
     * 触发事件
     * @param type 事件类型
     * @param args 回调函数参数数组
     */
    trigger(type,args){
        let typeList = this.eventList[type];
        if(!!typeList){
            for(let i=0;i<typeList.length;i++){
                typeList[i].apply(this,args)
            }
        }
    }
}
