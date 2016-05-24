import Slider from '../../src/index.js';
var node = document.getElementById('root');
var options={
    bindEvents:{
        "swipeLeft":(ele,info)=>{
            node.style["-webkit-transform"]='translate3d(-300px,0,0)'
        },
        "swipeRight":()=>{
            node.style["-webkit-transform"]='translate3d(-300px,0,0)'
        }
    }
};
var swipeInstance = new Slider(node,options);
