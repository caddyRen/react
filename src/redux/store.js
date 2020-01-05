/*
* 生成store 写法固定
*
* */
import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {counter} from "./reducers"

const store=createStore(
    counter,
    applyMiddleware(thunk)//应用异步中间件
)//内部会第一次调用reduer函数得到初始state
export default store
