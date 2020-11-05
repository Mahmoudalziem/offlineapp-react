import React, { Component, Fragment } from 'react';
import Banner from '../default/banner';
import banner from '../../assets/images/banner/banner.jpg';
import { FlatBox } from './flatBox'
import { HeaderDetails } from './headerDetails'
import {CourseInfo} from './courseInfo'
class ViewCourse extends Component{

    constructor(props) {
        super(props)
        this.state = {
            status: true
        }
    }
    slug = this.props.match.params.slug;

    render() {
        return (
            <Fragment>
                <Banner title="Course Details" image={banner} />
                <FlatBox />
                <HeaderDetails />
                <CourseInfo />
            </Fragment>
        )
    }
}

export default ViewCourse;