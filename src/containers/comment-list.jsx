import React from 'react'
import {connect} from "react-redux";

import ComponentList from '../component/component-list/component-list'

export default connect(
    state=>({comment:state.comment})//状态与reducers.jsx里function名对应
)(ComponentList)