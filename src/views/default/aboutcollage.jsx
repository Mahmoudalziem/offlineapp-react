import React, { Component, Fragment } from 'react';


class AboutCollage extends Component {
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
                                    <h6>The Faculty of Computers and Information, Zagazig University aims to:</h6>
                                    <ul>
                                        <li> Preparing specialists in computer science, information, networks, multimedia, 
                                            operations research and decision support, and those who are qualified with theoretical 
                                            foundations and application methodologies to enable them to compete internationally 
                                            in developing computer and information technologies. 
                                        </li>
                                        <li>  
                                            Conducting scientific and applied studies and research in the field of computers 
                                            and information that have a direct impact on the integrated development in society.
                                        </li>
                                        <li>
                                            Providing scientific and technical advice and assistance to bodies and agencies that use
                                            computer technologies and information and are interested in making and supporting decision-making.
                                        </li>
                                        <li>
                                            Rehabilitation of young graduates according to the needs of the labor market in the fields related
                                            to computers and information
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 offset-md-1">
                                <div className="about_us_right with-video">
                                    <a href="https://www.youtube.com/watch?v=9zwtIZNtTO4&t=132s" data-fancybox data-caption="Welcome To FCI Zagazig University">
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

export default AboutCollage;
