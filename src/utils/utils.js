/**
 * Created by slashhuang on 16/5/22.
 */

var utils={
   isMobile:()=>{
           /**
            * 使用TouchEvent来实验是否为移动端
            */
           try {
               document.createEvent("TouchEvent");
               return true;
           } catch (e) {
               return false;
           }
   }
};
export default utils;