import React, { Fragment, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from "react-js-pagination"
import { StickyContainer, Sticky } from 'react-sticky';
import { Menu} from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';

/// Image

import image from '../../assets/images/courses/course.jpg';

const { SubMenu } = Menu;

const Course = (props) => (

    <div className={`col-md-4 col-12`}>
        <div className="single-course">
            <div className="course-img">
                <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`}>
                    <img src={props.image} alt="course" />
                    <div className="course-hover">
                        <i className="fa fa-link"></i>
                    </div>
                </NavLink>
                <div class="doctor">
                    jon rock
                </div>
            </div>
            <div className="course-content">
                <h3>
                    <NavLink to={`/course/${props.title.toLowerCase().replace(/ /g, "-")}`}>{props.title}</NavLink>
                </h3>
                <p>{props.subtitle}</p>
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
const CoursesBox = (props) => {

    const [state, setState] = useState({
        activePage: 15
    })

    const handlePageChange = pageNumber => {

        console.log(`active page is ${pageNumber}`);

        setState({ activePage: pageNumber });
    }

    return (
        <Fragment>
            <StickyContainer>
            <div className="courses-container">
                <div className="container">
                    <div className="row">
                        <div className="col-9 order-md-2 order-2">
                            <div className="courses-box">
                                    <div className="search-form">
                                        <i className="fa fa-search"></i>
                                        <input className="w-100" type="text" placeholder="Course Name" autoFocus/>
                                    </div>
                                <div className="row">
                                    {
                                        courseData.map((course, index) => (
                                            <Course key={index} title={course.title} subtitle={course.subtitle} image={course.image}/>
                                        ))
                                    }
                                </div>
                                <Pagination
                                    activePage={state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={450}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                />
                            </div>
                        </div>
                            <div className="col-3 order-md-2 order-1">
                                <Sticky>
                                    {({
                                        style,
                                        isSticky,
                                        wasSticky,
                                        // calculatedHeight
                                    }) => (
                                            <div className="coursesbox-right" style={style}>
                                                <div className="mt-5"></div>
                                                <Menu
                                                    defaultSelectedKeys={['1']}
                                                    defaultOpenKeys={['sub1']}
                                                    mode="inline"
                                                    theme="light"
                                                >
                                                    <Menu.Item key="1" icon={<MailOutlined />}>
                                                        All Years
                                                    </Menu.Item>
                                                    <Menu.Item key="2" icon={<MailOutlined />}>
                                                        First Year
                                                    </Menu.Item>
                                                    <Menu.Item key="3" icon={<CalendarOutlined />}>
                                                        Second Year
                                                    </Menu.Item>
                                                    <Menu.Item key="4" icon={<CalendarOutlined />}>
                                                        Third Year
                                                    </Menu.Item>
                                                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Fourth Year">
                                                        <Menu.Item key="5">Cs Department</Menu.Item>
                                                        <Menu.Item key="6">IT Department</Menu.Item>
                                                        <Menu.Item key="7">IS Department</Menu.Item>
                                                        <Menu.Item key="8">DS Department</Menu.Item>
                                                    </SubMenu>
                                                </Menu>
                                            </div>
                                        )}
                                </Sticky>
                        </div>
                    </div>
                </div>
            </div>
                
                </StickyContainer>
        </Fragment>
    )
}

export default CoursesBox;



