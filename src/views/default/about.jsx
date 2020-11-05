import React, { Component, Fragment } from 'react';


class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <section className="about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <div className="about-us-content">
                                    <h2>
                                        <span>Welcome To</span>
                                        <span>FCI Zagazig University</span>
                                    </h2>
                                    <p>
                                        This project is a web site is work as system for college to divide to two parts:<br/>
                                        helps student to reach important information without Internet. <br/>helps professors
                                         and faculty officers to publish all information belong to student from college.
                                    </p>
                                    <p>
                                    	Solve The problem of wasting time and effort in inquiring about something in college.
                                        Solve The problem of a difficulty faces students to reach for the information of the college.
                                        Solve The problem of a difficulty faces professors to communicate with student and tell them the new news.
                                        Solve The problem of looking at technological development is negative.
                                        Solve The problem of difficulty in education process for student of college.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 offset-md-1">
                                <div className="about_us_right with-video">
                                    <a href="https://youtu.be/aCdq8Zpxfvk" data-fancybox data-caption="Welcome To FCI Zagazig University">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }
}

export default AboutUs;
