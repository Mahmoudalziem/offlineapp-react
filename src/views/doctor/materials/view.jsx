import React, { Fragment, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Equalizer from 'react-equalizer'
import Pagination from "react-js-pagination"
import image from '../../../assets/images/courses/course.jpg';

const Course = (props) => (

    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-course">
            <div className="course-img">
                <a href={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`} target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt="course" />
                    <div className="course-hover">
                        <i className="fa fa-link"></i>
                    </div>
                </a>
            </div>
            <div className="course-content">
                <h3>
                    <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`}>{props.title}</NavLink>
                </h3>
                <p>{props.subtitle}</p>
                <NavLink to={`/doctor/edit/${props.title.toLowerCase().replace(/ /g, "-")}`} className="btn">Edit Course</NavLink>
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
                    `,
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
const View = () => {

    const [state, setState] = useState({
        activePage: 15
    })
    
    const handlePageChange = pageNumber => {

        console.log(`active page is ${pageNumber}`);

        setState({activePage: pageNumber});
    }
    
    return (
        <Fragment>
            <section className="search-box">
                <div className="search_course_content d-flex">
                    <i className="fa fa-search"></i>
                    <input type="search" className="search w-100" name="search" placeholder="Search for course by name" />
                    <NavLink to="/doctor/materials/add" className="d-block btn">
                        Add Course
                    </NavLink>
                </div>
            </section>
                
            <section className="materials-content">
                <div className="container">
                    <Equalizer className="row">
                        {
                            courseData.map((course, index) => (
                                    <Course key={index} title={course.title} subtitle={course.subtitle} image={course.image} />
                            ))
                        }
                    </Equalizer>
                    <Pagination
                        activePage={state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />

                </div>
            </section>
        </Fragment>
    )

}

export default View;