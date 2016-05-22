import  Slider from '../../src/index.js';

var node = document.getElementById('root');
var options={
    direction:'y',
    loop:false,
    callback: function (info) {
        /**
         * 提供的对外信息包括如下
         * {
                     *   targetIndex:目前展示的children序数号ID及dom节点,
                     *   options:整个组件的配置信息
                     * }
         */
        console.log(info)
    }
};
var swipeInstance = new Slider(node,options)