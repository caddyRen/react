import React from 'react'
import {connect} from "react-redux";

import {decrement, increment} from "../redux/actions";
import ReduxDemo2 from '../component/demo-redux/redux-demo2'

export default connect(
    state=>({count:state}),
    {increment,decrement}
)(ReduxDemo2)