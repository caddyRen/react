import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import App from './component/app/app'

//react插件reactRedux
render(<BrowserRouter>
           <App/>
        </BrowserRouter>,document.getElementById("root")
    )

//原生redux使用方式
/*function render2(){
    render(
        (<BrowserRouter>
            <App store={store}/>
        </BrowserRouter>)
        ,document.getElementById("root")
    )
}
//页面初始化显示
render2()
//订阅监听 store中的状态变化了，就会自动调用重绘dom
store.subscribe(render2)*/
