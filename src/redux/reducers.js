/**
 * 包含n个reducer函数模块
 * 根据旧state和action返回新state
 */
import {combineReducers} from 'redux'

import {INCREMENT,DECREMENT,ADD_COMMENT,DEL_COMMENT,INIT_COMMENT} from './action-types'

// 1.定义默认数据
const initialState = {
    count: 1,
    comments:[{userName: "a",content:"b"}]
}

export function counter(state=initialState.count,action) {
    switch (action.type) {
        case INCREMENT:
            return state+action.data
        case DECREMENT:
            return state-action.data
        default:
            return state
    }
}

export function comment(state=initialState.comments,action) {
    switch (action.type) {
        case ADD_COMMENT:
            state.unshift(action.data)
            return [...state];
            // return state;
        case DEL_COMMENT:
            state.splice(action.data,1)
            return state
        default:
            return state
    }
}


export const rootReducers=combineReducers({
    counter:counter,comment:comment
})
export default rootReducers