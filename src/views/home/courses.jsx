import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import mixitup from 'mixitup';


/// Image

import image from '../../assets/images/courses/course.jpg';

const Course = (props) => (

    <div className={`col-lg-4 col-md-6 col-12 mix ${props.type}`}>
        <div className="single-course">
            <div className="course-img">
                <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`}>
                    <img src={props.image} alt="course" />
                    <div className="course-hover">
                        <i className="fa fa-link"></i>
                    </div>
                </NavLink>
            </div>
            <div className="course-content">
                <h3>
                    <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`}>{props.title}</NavLink>
                </h3>
                <p>{props.subtitle}</p>
                <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`} className="btn">Read More</NavLink>
            </div>
        </div>
    </div>
)

const courseData = [
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image : image,
        type:'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    },
    {
        title: 'Cs Engineering',
        subtitle: `I must explain to you how all this a mistaken
                    idea of denouncing great explorer of the rut
                    the is lder of human happiness`,
        image: image,
        type: 'cs'
    }
]

class Courses extends Component{

    componentDidMount() {

        mixitup(".feature-container-body");
    }

    render() {
        return (
            <div className="feature-courses">
                <div className="container">
                    <div className="feature-body">
                        <h3 className="header"> Featured Courses</h3>
                        <div className="feature-container">
                            <div className="feature-container-filter">
                                <button type="button" data-filter="all">All</button>
                                <button type="button" data-filter=".cs">CS</button>
                                <button type="button" data-filter=".it">IT</button>
                                <button type="button" data-filter=".ds">DS</button>
                                <button type="button" data-filter=".is">IS</button>
                            </div>
                            <div className="feature-container-body">
                                <div className="row">
                                    {
                                        courseData.map((course,index) => (
                                            <Course key={index} title={course.title} subtitle={course.subtitle} image={course.image} type={course.type}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Courses;