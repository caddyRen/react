import React,{Component} from 'react'
import PropTypes from "prop-types";

import './componentItem.css'

export default class ComponentItem extends Component{
    //static 给组件类指定属性
    static propTypes={
        component: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        deleteComponent:PropTypes.func.isRequired
    }

    delClick=()=>{
        const {component,index,deleteComponent}=this.props
        if(window.confirm(`确定删除${component.userName}的评论`)){
            deleteComponent(index)
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