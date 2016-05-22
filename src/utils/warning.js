/**
 * Created by slashhuang on 16/5/22.
 * 警告报错处理
 */
export default function(message){
    if (typeof console !== 'undefined') {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (x) {}
}