import React from 'react'

export const CourseInfo = () => {
    return(
        <section className="course_show_body">
            <div className="container">
                <div className="row">

                    <div className="col-md-8 col-12 order-md-1 order-2">
                        <div className="course_show_body_content ">

                            <div className="course_show_tab_buttons pt-4">
                                <ul className="nav nav-tabs nav_buttons col-11 p-0 mx-auto" id="myTab" role="tablist">

                                    <li className="list_item_tab_button nav_item col">
                                        <a className="nav-link active" data-toggle="tab" href="#overview" role="tab">
                                            Overview
                                        </a>
                                    </li>

                                    <li className="list_item_tab_button nav_item col">
                                        <a className="nav-link" data-toggle="tab" href="#Curriculum" role="tab">
                                            Files
                                        </a>
                                    </li>

                                    <li className="list_item_tab_button nav_item col">
                                        <a className="nav-link" data-toggle="tab" href="#Instructor" role="tab">
                                            Doctor
                                        </a>
                                    </li>

                                    <li className="list_item_tab_button nav_item col">
                                        <a className="nav-link" data-toggle="tab" href="#Reviews" role="tab">
                                            Reviews
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className="course_show_tab_body tab-content pt-4">

                                <div className="tab-pane fade show active" id="overview" role="tabpanel">

                                    <div className="course_description">

                                        <div>
                                            <h5>
                                                Course Description
                                            </h5>
                                            <p>
                                                Hello Come Back
                                            </p>
                                        </div>

                                        <div>
                                            <h5>
                                                Prerequisites
                                            </h5>
                                            <p>
                                                Hello Come Back
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="Curriculum" role="tabpanel">

                                    <div className="course_curriculum panel-group" id="tab-panel">
                                        Files
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="Instructor" role="tabpanel">
                                    <div className="course_instructor d-md-flex">
                                        <div className="course_instr_image_name">
                                            <div className="course_instr_image">
                                                <img src="<?php echo $course->in_image ?>" alt=""/>
                                            </div>
                                            <div className="course_instr_name">
                                                azima
                                            </div>
                                        </div>
                                        <div className='course_instr_details'>
                                            <h5>Mahmoud Abd Alziem</h5>
                                            <p>
                                                Hello come Back
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="Reviews" role="tabpanel">
                                    <div className="course_review">
                                        <div className="row no-gutters">
                                            <div className="col-md-5 col-12 order-md-1 order-2 column_review">

                                                <div className="review mt-md-4">
                                                    <h5 className="number_rating">
                                                        5
                                                    </h5>
                                                </div>

                                                <div className="review mt-md-5">
                                                    <p>Review</p>
                                                    <div className="rate" data-course="">
                                                        <div id="1" className="btn-1 rate-btn"></div>
                                                        <div id="2" className="btn-2 rate-btn"></div>
                                                        <div id="3" className="btn-3 rate-btn"></div>
                                                        <div id="4" className="btn-4 rate-btn"></div>
                                                        <div id="5" className="btn-5 rate-btn"></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-7 col-12 order-md-2 order-1 column_review">

                                                <div className="review_number_count">
                                                    <span className="count_review" id="review_5">
                                                        4
                                                    </span>
                                                    <div className="result_review_count d-inline-block">
                                                        <div className="rate-bg1"></div>
                                                        <div className="rate-stars1"></div>
                                                    </div>
                                                    <div className="percent d-inline-block">100%</div>
                                                </div>

                                                <div className="review_number_count">
                                                    <span className="count_review" id="review_4">
                                                        3
                                                    </span>
                                                    <div className="result_review_count d-inline-block">
                                                        <div className="rate-bg1"></div>
                                                        <div className="rate-stars1"></div>
                                                    </div>
                                                    <div className="percent d-inline-block">80%</div>
                                                </div>

                                                <div className="review_number_count">
                                                    <span className="count_review" id="review_3">
                                                        2
                                                    </span>
                                                    <div className="result_review_count d-inline-block">
                                                        <div className="rate-bg1"></div>
                                                        <div className="rate-stars1"></div>
                                                    </div>
                                                    <div className="percent d-inline-block">60%</div>
                                                </div>

                                                <div className="review_number_count">
                                                    <span className="count_review" id="review_2">
                                                        1
                                                    </span>
                                                    <div className="result_review_count d-inline-block">
                                                        <div className="rate-bg1" ></div>
                                                        <div className="rate-stars1"></div>
                                                    </div>
                                                    <div className="percent d-inline-block">40%</div>
                                                </div>

                                                <div className="review_number_count">
                                                    <span className="count_review" id="review_1">
                                                        0
                                                    </span>
                                                    <div className="result_review_count d-inline-block">
                                                        <div className="rate-bg1"></div>
                                                        <div className="rate-stars1"></div>
                                                    </div>
                                                    <div className="percent d-inline-block">20%</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="comment_review_container d_none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center col-md-4 col-12 order-md-2 order-1">

                        <div className="course_intro_details">

                            <div className="course_intro_include">

                                <div className="course_include_details">
                                    
                                    <ul className="course_include_content">

                                        <li className="course_include_item">
                                            <i className="fa fa-file-video-o"></i>
                                            <span className="course_hour">
                                                Course Sections
                                            </span>
                                        </li>

                                        <li className="course_include_item">
                                            <i className="fa fa-files-o"></i>
                                            <span className="course_hour">
                                                Lectures
                                            </span>
                                        </li>

                                        <li className="course_include_item">
                                            <i className="fa fa-calendar"></i>
                                            
                                            <span className="course_hour">
                                                Hours
                                            </span>
                                        </li>

                                        <li className="course_include_item">
                                            <i className="fa fa-mobile"></i>
                                            <span className="course_hour">
                                                Access on mobile and TV
                                            </span>
                                        </li>
                                    </ul>
                                </div>



                            </div>

                            <div className="social_share">
                                <div id="shareIcons" className="jssocials"></div>

                                <div className="qr_code mx-auto">                                    
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?data=Mahmoud abd Alziem"
                                        alt="question_qrcode" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}