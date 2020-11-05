import React ,{Component} from "react";
import Axios from "axios";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../../images/team/img1.jpg";
import img2 from "../../images/team/img2.jpg";
import img3 from "../../images/team/img3.jpg";
import img4 from "../../images/team/img4.jpg";
import img5 from "../../images/team/img5.jpeg";
import img6 from "../../images/team/img6.jpg"
import img7 from "../../images/team/img7.jpg"
class Team extends Component{
    state={
        team:[]
    }
    componentDidMount(){
        Axios.get("json/data.json").then(res=>{
            return(
                this.setState({
                    team: res.data.Team
                })
            )
        })
    }
    render(){
        const {team}=this.state;
        const TeamList=team.map((t)=>{
            return(
                <div className="col-md-3 col-sm-12" key={t.id}>
                   <div className="card">
                        <img src={t.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {t.name} </h5>
                            <p className="card-text"> {t.job} </p>
                            
                            
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className='team'>
                <div className="container-fluid">
                    <div className="team-header text-center">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-7">
                                <div className="section-header">
                                    <h2> our team </h2>
                                </div>
                                   
                            </div>
                        </div>
                    </div>
                    <div className="team-content">
                       
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={20}
                                autoplay={true}
                                autoplayTimeout={3000}
                                autoplayHoverPause={true}
                                autoWidth={true}
                                dots={false}
                            >
                            <div className="item">
                                <div className="card">
                                    <img src={img1} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> moamen Tarek </h5>
                                        <p className="card-text"> UI/UX </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img2} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mohamed Nasrallh </h5>
                                        <p className="card-text"> Front-End Developer </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img3} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mahmoud Abd Elazim </h5>
                                        <p className="card-text"> Back-End Developer </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img4} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mohamed Osame </h5>
                                        <p className="card-text"> IOS Developer </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img5} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mahmoud Ashraf </h5>
                                        <p className="card-text"> Android </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img6} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mahmoud Wahdan </h5>
                                        <p className="card-text"> Android </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <img src={img7} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title"> mohamed Tohamy </h5>
                                        <p className="card-text"> system analysis </p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </OwlCarousel>
            
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;