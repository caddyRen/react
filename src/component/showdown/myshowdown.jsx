import React, {Component} from 'react'
import showdown from 'showdown'

import './myShowDown.css'

export default class MyShowDown extends Component{

    state={
        value:'Hello, World!\n===\n---\n# This is an h1\n## This is an h2\n### This is an h3\n#### This is an h4\n##### This is an h5\n###### This is an h6'
    }

    createMarkup=()=>{
        const converter=new showdown.Converter
        const {value}=this.state
        return converter.makeHtml(value)

    }

    handleChange=(event)=>{
        this.setState({value: event.target.value})
    }

    render() {
        const {value}=this.state
        const html={__html:this.createMarkup()}
        return(
            <div className="row">
                <div className="col-sm-6">
                    <textarea type="text" id='markdown' className='col-xs-10 col-xs-offset-1 full-height'
                  defaultValue={value} onChange={this.handleChange}/>
                </div>
                <div className="col-sm-6">
                    <div id="htmlArea" className='col-xs-10 col-xs-offset-1 full-height'>
                        <div dangerouslySetInnerHTML={{__html:this.createMarkup()}}></div>
                    </div>
                </div>
            </div>
        )
    }
}