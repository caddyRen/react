import React,{Component} from 'react'
import PropTypes from "prop-types";
import Pubsub from 'pubsub-js'

import './componentItem.css'

export default class ComponentItem extends Component{
    //static 给组件类指定属性
    static propTypes={
        component: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    }

    delClick=()=>{
        const {component,index}=this.props
        if(window.confirm(`确定删除${component.userName}的评论`)){
            //
            Pubsub.publish('deleteComponent',index)
        }
    }

    render() {
        const {component}=this.props
        return(
            <li className='list-group-item'>
                <div className='handle'>
                    <a href='javascript:;' onClick={this.delClick}>删除</a>
                </div>
                <p className="user"><span>{component.userName}</span><span>说：</span></p>
                <p className="centence">{component.content}</p>
            </li>
        )
    }
}