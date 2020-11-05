import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import doc1 from "../../images/Doctor/img1.jpg";
import doc2 from "../../images/Doctor/img2.jpg";
import doc3 from "../../images/Doctor/img3.jpg";
import doc4 from "../../images/Doctor/img4.png";
import doc5 from "../../images/Doctor/img5.jpg";
import doc6 from "../../images/Doctor/img6.jpg";

const Doctor = ({image,href,name,title}) => (
    
    <div className="doctor-body">
        <div className="image">
            <img src={image} alt="" className="lazy" />
                <div className="overlay_social">
                    <a href={href}>
                        <i className="fa fa-facebook"></i>
                    </a>
            </div>
        </div>
        <div className="name">
            <a href={`doctor/${name.replace(' ','-')}`}>
                {name}
            </a>
        </div>
        <div className="title">{title}</div>
    </div>
)

class Doctors extends Component{
    render(){
        return(
            <div className="doctors-container">
                <div className="container">
                    <h3 className="header">Doctors</h3>
                        <div className="doctor-content">
                        <OwlCarousel className="owl-theme" loop autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} nav={true} items={4} dots={false}>
                            
                            <Doctor image={doc1} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />

                            <Doctor image={doc2} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />

                            <Doctor image={doc3} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />


                            <Doctor image={doc4} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />

                            <Doctor image={doc5} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />

                            <Doctor image={doc6} href="#" name="Ehab Roshdy"
                                title="Cs is a field that Combine between hardware
                                        and software design of computer systems"
                            />
                        </OwlCarousel>
                    </div>    
                </div>
            </div>
        )
    }
}
export default Doctors;