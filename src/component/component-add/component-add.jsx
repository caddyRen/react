import React,{Component} from 'react'
import  PropTypes from 'prop-types'

import './componentAdd.css'

class ComponentAdd extends Component{
    static propTypes={
        addComponent:PropTypes.func.isRequired
    }
    state={
        userName:'',
        content:''
    }

    handleSubmit=()=>{
        //搜集数据并封装成components对象
        const component=this.state
        //更新状态
        this.props.addComponent(component)
        //清楚数据
        this.setState({
            userName:'',
            content:''
        })

    }
    handleChangeName=(event)=>{
        const userName=event.target.value
        this.setState({userName})
    }
    handleChangeCont=(event)=>{
        const content=event.target.value
        this.setState({content})
    }

    render() {
        const {userName,content}=this.state
        return(
            <div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <label>用户名</label>
                        <input type='text' className='form-control' placeholder='用户名'
                               value={userName} onChange={this.handleChangeName}/>
                    </div>
                    <div className='form-group'>
                        <label>评论内容</label>
                        <textarea type='text' className='form-control' rows='6' placeholder='评论内容'
                                  value={content} onChange={this.handleChangeCont}></textarea>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button type='button' className='btn btn-default pull-right'
                                    onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ComponentAdd