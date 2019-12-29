import React, {Component} from 'react'
import Ajax from "../ajax/ajax";
import Pubsub from 'pubsub-js'

import ComponentTitle from '../component-title/component-title'
import ComponentList from '../component-list/component-list'
import ComponentAdd from '../component-add/component-add'
import ComponentNavigation from "../component-navigation/component-navigation";
import MyShowDown from "../showdown/myshowdown";
import Mybattery from "../mybattery/mybattery";
import ComponentCarousel from "../component-carousel/component-carousel";
import Main from '../demo-comment/main'
import Search from '../demo-comment/search'
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
    componentDidMount() {
        Pubsub.subscribe('deleteComponent',(msg,index)=>{
                this.deleteComponent(index)
            }
        )
    }

    render() {
        const {components}=this.state
        return (
            <div className="bg container-fluid">
                <ComponentTitle titleName="九重葛" titleContent="天下神器&nbsp;不可为也&nbsp;不可执也&nbsp;为者败之&nbsp;执者失之"/>
                <ComponentNavigation/>
                <ComponentCarousel/>
                <MyShowDown/>
                <Ajax/>
                <Mybattery/>
                <ComponentAdd addComponent={this.addComponent}/>
                <ComponentList components={components} deleteComponent={this.deleteComponent} />
                <div className='container'>
                    <Search/>
                    <Main/>
                </div>
            </div>
        )
    }
}

export default App