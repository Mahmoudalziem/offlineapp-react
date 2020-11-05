import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
/// owl Carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//// Import Images

import slider1 from '../../assets/images/slider/slide1.jpg';

import slider2 from '../../assets/images/slider/slide2.jpg';

import slider3 from '../../assets/images/slider/slide3.jpg';

const Item = ({ image, header, content }) => (

    <div className="item">
        <div className="slider-body carousel-item active">
            <div className="slider-body-image">
                <img className="d-block w-100" src={image} alt="First slide" />
            </div>
            <div className="slider-body-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="body-content">
                                <h5>{header}</h5>
                                <p>{content}</p>
                                <NavLink to="/register" className="btn">Get Started Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


class Slider extends Component {
    render() {
        return (
            <div className="slider-content">
                <OwlCarousel className="home-slider owl-carousel owl-loaded owl-theme owl-drag" loop items={1} margin={0} autoplay={true}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}>

                    <Item
                        image={slider1}
                        header='Welcome To Computer Science Zagazig University '
                        content="With Fci You Will Known All Information About Materials
                                , Doctors And Courses With Login Student Upload Tasks And Take Exams"
                    />

                    <Item
                        image={slider2}
                        header='Welcome To Computer Science Zagazig University '
                        content="This project is a website is work as system for college 
                                , helps professors and faculty officers to publish all information belong to student from college."
                    />

                    <Item
                        image={slider3}
                        header='Welcome To Computer Science Zagazig University.'
                        content="The problem of a difficulty faces professors to communicate with student and tell them the new news.
                        	    The problem of looking at technological development is negative.
                        	    The problem of difficulty in education process for student of college. "
                    />
                </OwlCarousel>

                <div className="slider-info">
                    <div className="container">
                        <div className="col-md-9 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="mail info">
                                        Email : info-informatics@zu.edu.eg
                                        </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="phone info">
                                        Phone : <span>(055) 2261521</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="social info">
                                        Follow us :
                                        <ul className="info-social">
                                            <li><NavLink to="#">
                                                <i className="fa fa-twitter"></i>
                                            </NavLink>
                                            </li>
                                            <li><NavLink to="https://www.facebook.com/FCI.ZU.Formal.Page/"><i className="fa fa-facebook"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-instagram"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-twitch"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Slider;