import React, {Component} from 'react'
import './component-title.css'

function jian(opacity) {
    return opacity - 0.02
}

function jia(opacity) {
    return opacity + 0.01
}

class ComponentTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            bool: true
        }
    }

    componentDidMount() {
        setInterval(function () {
                let {opacity} = this.state
                let {bool} = this.state
                if (bool) {
                    opacity = jian(opacity)
                    if (opacity <= -0.3) {
                        bool = !bool
                        this.setState({bool})
                    }
                    this.setState({opacity})
                } else {
                    opacity = jia(opacity)
                    if (opacity >= 1) {
                        bool = !bool
                        this.setState({bool})
                    }
                    this.setState({opacity})
                }
            }.bind(this), 50
        )
    }

    render() {
        const {opacity}=this.state
        return (
            <header className='site-header jumbotron'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <h1 style={{opacity}}>{this.props.titleName}</h1><br/>
                            <h2 style={{opacity}}>{this.props.titleContent}</h2>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default ComponentTitle