import React from 'react'

export const HeaderDetails = () => {
    return (
        <section className="section-details">
            <div className="container">
                <div className="course-info ">
                    <div className="row">

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-file-video-o"></i>
                                </div>
                            <p className="course-info-name">Duration</p>
                                <h4 className="course-info-value">
                                    20 s
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-file-word-o"></i>
                                </div>
                                <p className="course-info-name">Lessons</p>
                                
                            <h4 className="course-info-value">
                                    30
                                videos
                            </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-book"></i>
                                </div>
                                <p className="course-info-name">Resources</p>
                                <h4 className="course-info-value">
                                    10
                                Files
                            </h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-calendar-times-o"></i>
                                </div>
                                <p className="course-info-name">Date</p>
                                <h4 className="course-info-value" >10 10</h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <p className="course-info-name">Access</p>
                                <h4 className="course-info-value">Lifetime</h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="course-infobox">
                                <div className="course-info-icon">
                                    <i className="fa fa-language"></i>
                                </div>
                                <p className="course-info-name">Language</p>
                                <h4 className="course-info-value">english</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}