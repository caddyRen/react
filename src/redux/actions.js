/*
* 生成action creator
*
* 同步action返回对象
* 异步action返回函数
*
* */
import {INCREMENT,DECREMENT} from "./action-types";

//同步action
/*export const increment=(num)=>{
    return {type:INCREMENT,data:num}
}*/
export const increment=(num)=>({type:INCREMENT,data:num})
export const decrement=(num)=>({type:DECREMENT,data:num})

//异步action
export const incrementAsync=(num)=>
    (dispatch => {
        setTimeout(()=>{
            //1s后分发一个action
            dispatch(increment(num))
        },1000)
    }
)
//异步另一种写法
/*
export const incrementAsync=(num)=>{
    return dispatch=>{
        setTimeout(()=>{
            //1s后分发一个action
            dispatch(increment(num))
        },1000)
    }
}
* */
