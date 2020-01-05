import React, {Component} from 'react'
import Pubsub from 'pubsub-js'
import {Provider} from "react-redux";

import ComponentTitle from '../component-title/component-title'
import ComponentList from '../component-list/component-list'
import ComponentAdd from '../component-add/component-add'
import ComponentNavigation from "../component-navigation/component-navigation";
import Main from '../demo-comment/main'
import Search from '../demo-comment/search'
import ReduxDemo from "../demo-redux/redux-demo1";
import ReduxDemo2 from "../../containers/react-redux-demo";
import './app.css'
import store from "../../redux/store";


export default class App extends Component {
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
        Pubsub.subscribe('component',(msg,component)=>{
                this.addComponent(component)
            }
        )

    }

    render() {
        const {components}=this.state
        return (
            <div className="bg container-fluid">
                <ComponentTitle titleName="九重葛" titleContent="天下神器&nbsp;不可为也&nbsp;不可执也&nbsp;为者败之&nbsp;执者失之"/>
                <ReduxDemo/>
                <Provider store={store}>
                    <ReduxDemo2/>
                </Provider>
                <ComponentNavigation/>
                <ComponentAdd/>
                <ComponentList components={components}/>
                <div className='container'>
                    <Search/>
                    <Main/>
                </div>
            </div>
        )
    }
}

