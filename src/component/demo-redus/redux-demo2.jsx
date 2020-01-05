import React, {Component} from 'react'

import * as actions from '../../redux/actions'

export default class ReduxDemo2 extends Component{

    increment=()=>{
        let num=this.select.value*1
        this.props.store.dispatch(actions.increment(num))
    }
    decrement=()=>{
        let num=this.select.value*1
        this.props.store.dispatch(actions.decrement(num))
    }
    oddIncrement=()=>{
        let num=this.select.value*1
        if(this.props.store.getState()%2===1){
            this.props.store.dispatch(actions.increment(num))
        }
    }
    asynIncrement=()=>{
        let num=this.select.value*1
        setTimeout(()=>{
            this.props.store.dispatch(actions.increment(num))
        },1000)
    }

    render() {
        const count=this.props.store.getState()
        return(
            <div>
               <p>click {count} times</p>&nbsp;
                <div>
                    <select ref={select=>this.select=select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.oddIncrement}>increment if odd</button>&nbsp;
                    <button onClick={this.asynIncrement}>increment async</button>
                </div>
            </div>
        )
    }
}