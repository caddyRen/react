import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {BrowserRouter,HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import App from './component/app/app'

render(
    (<BrowserRouter>
        <App/>
    </BrowserRouter>)
    ,document.getElementById("root")
)