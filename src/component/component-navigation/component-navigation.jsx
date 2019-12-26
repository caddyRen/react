import React, {Component} from 'react'

export default class ComponentNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>

                </div>
                <div>
                    <ul className="nav nav-tabs nav-justified">
                        <li className="active"><a href="#">Home</a> </li>
                        <li><a href="#">Security</a> </li>
                        <li><a href="#">photo</a> </li>
                        <li><a href="#">md</a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}