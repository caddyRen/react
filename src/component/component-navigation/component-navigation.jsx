import React, {Component} from 'react'

import './componentNavigation.css'

export default class ComponentNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pos-f-t">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand">Hi</a>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">note</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">photo</a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}