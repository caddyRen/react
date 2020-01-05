/*
* 生成store 写法固定
*
* */
import {createStore} from "redux";
import {counter} from "./reducers";

const store=createStore(counter)//内部会第一次调用reduer函数得到初始state
export default store
