import React from 'react';

import image from '../../assets/images/about/about.png';
export const Achivement = () => (

    <section className="achivement">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-12">
                    <div className="achivement-content">
                        <h3>Our's <span>achivement</span></h3>
                        <p>
                            helps student to reach important information without Internet..
                             helps professors and faculty officers to publish all information belong to student from college.<br/>
                             help student can downloads material ,upload taskes and make Exame.
                        </p>
                        <div className="achivement-counter">
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <div className="counter-content">
                                        <div className="counter-content-count counter">300</div>
                                        <div className="counter-content-title">Students</div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12">
                                    <div className="counter-content">
                                        <div className="counter-content-count counter">125</div>
                                        <div className="counter-content-title">Facebook Likes</div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12">
                                    <div className="counter-content">
                                        <div className="counter-content-count counter">200</div>
                                        <div className="counter-content-title">Sessions</div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12">
                                    <div className="counter-content">
                                        <div className="counter-content-count counter">400</div>
                                        <div className="counter-content-title">Tutors</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div className="achivement-exper">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)