import React,{Component} from 'react'
import PropTypes from 'prop-types'

import ComponentItem from '../component-item/component-item'
import './componentList.css'

export default class ComponentList extends Component{
    //static 给组件类指定属性
   static propTypes={
        components: PropTypes.array.isRequired
    }
    render() {
        const {components}=this.props
        const display=components.length===0?'block':'none'
        return(
            <div className='col-md-8'>
                <h3 className='reply'>评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论</h2>
                <ul className='list-group'>
                    {
                        components.map(
                        (component,index) =>(<ComponentItem component={component} key={index} index={index}/>)
                        )
                    }
                </ul>
            </div>
        )
    }
}
