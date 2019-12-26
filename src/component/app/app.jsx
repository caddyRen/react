import React, {Component} from 'react'
import Ajax from "../ajax/ajax";

import ComponentTitle from '../component-title/component-title'
import ComponentList from '../component-list/component-list'
import ComponentAdd from '../component-add/component-add'
import ComponentNavigation from "../component-navigation/component-navigation";
import MyShowDown from "../showdown/myshowdown";
import Mybattery from "../mybattery/mybattery";
import './app.css'


class App extends Component {
    state={
        components:[
            {userName:'caddy',content:'mmp'},
            {userName:'tom',content:'qnmb'}
            ]
    }
    addComponent=(component)=>{
        const {components}=this.state
        components.unshift(component)
        this.setState(components)
    }
    deleteComponent=(index)=>{
        const {components}=this.state
        components.splice(index,1)
        this.setState(components)
    }

    render() {
        const {components}=this.state
        return (
            <div className="index-component">
                <ComponentTitle titleName="九重葛" titleContent="天下神器&nbsp;不可为也&nbsp;不可执也&nbsp;为者败之&nbsp;执者失之"/>
                <MyShowDown/>
                <Ajax/>
                <ComponentNavigation/>
                <div className='container'>
                    <Mybattery/>
                    <ComponentAdd addComponent={this.addComponent}/>
                    <ComponentList components={components} deleteComponent={this.deleteComponent} />
                </div>

            </div>
        )
    }
}

export default App