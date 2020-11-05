import React, { Fragment, useEffect } from 'react';
import Banner from '../default/banner';
import banner from '../../assets/images/banner/banner.jpg';
import CoursesBox from './coursesbox';
const Courses = (props) => {

    return (
        <Fragment>
            <Banner title="All Courses" image={banner} />
            <CoursesBox />
        </Fragment>
    )
}

export default Courses;



