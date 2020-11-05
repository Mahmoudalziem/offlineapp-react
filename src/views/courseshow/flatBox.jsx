import React from 'react'

export const FlatBox = () => {
    return (
        <div className="header-floatbox">
            <div className="container">
                <div className="col-12">
                    <div className="course-portfolio">
                        <div className="container">
                            <div className="row">

                                <div className="review col-md-4">
                                    <p>Course Name</p>
                                    <div className="box-result">
                                        <h5> Hello come Back</h5>
                                    </div>
                                </div>

                                <div className="review col-md-4">
                                    <p>Your Review</p>
                                    <div className="box-result">
                                        <div className="result-container">
                                            <div className="rate-bg"></div>
                                            <div className="rate-stars"></div>
                                        </div>
                                        <h5>Rated
                                                <span className="rating_user d-inline-block"></span>
                                                        out of 10
                                                    </h5>
                                    </div>
                                </div>


                                <div className="review col-md-4">
                                    <p>Last Modified</p>
                                    <div className="box-result">

                                        <h5 >12 12 2020</h5>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}