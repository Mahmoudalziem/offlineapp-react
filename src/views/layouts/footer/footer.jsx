import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="home-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="footer-social">
                                <ul className="info-social">
                                    <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fa fa-instagram"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fa fa-twitch"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="footer-reserved">
                                All Right Reserved 2020 @ FCI Zagazig University
                </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="footer-back">
                                back-to-top
                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;