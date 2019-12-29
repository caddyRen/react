import React,{Component} from 'react'
import img1 from '../../bg.jpg'
import img2 from '../../bg2.jpg'
import './componentCarousel.css'

export default class ComponentCarousel extends Component{
    state ={
        img:'https://avatars2.githubusercontent.com/u/50005159?v=4',
        bol:true
    }

    componentDidMount() {
        const img1='https://avatars2.githubusercontent.com/u/50005159?v=4'
        const img2='https://avatars0.githubusercontent.com/u/14026100?v=4'
        setInterval(function () {
                if(this.state.bol){
                    console.log("===")
                    this.setState({img:img2,bol:false})
                }else {
                    console.log("---")
                    this.setState({img:img1,bol:true})
                }
            }.bind(this), 3000
        )
    }

    render() {
        const {img}=this.state
        return(
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}