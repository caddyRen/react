import React, {Component} from 'react'
import Ajax from "../ajax/ajax";
import Pubsub from 'pubsub-js'
import {NavLink,Switch,Route,Redirect} from "react-router-dom";


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
import About from '../../views/about'
import Home from '../../views/home'
import MyNavLink from "../component-navigation/my-navlink";


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
                <div className='row'>
                    <div className='col-2'>
                        <div className='list-group'>
                            <MyNavLink to='/about' className='list-group-item'>About</MyNavLink>
                            <MyNavLink to='/home' className='list-group-item'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='panel'>
                            <div className='panel-body'>
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>



                <ComponentNavigation/>
                <MyShowDown/>
                <Ajax/>
                <Mybattery/>
                <ComponentAdd addComponent={this.addComponent}/>
                <ComponentList components={components} deleteComponent={this.deleteComponent} />
                <div className='container'>
                    <Search/>
                    <Main/>
                </div>
                <ComponentCarousel/>
            </div>
        )
    }
}

export default App