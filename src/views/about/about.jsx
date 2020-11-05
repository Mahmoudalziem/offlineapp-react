import React, { Fragment, useEffect } from 'react';
import $ from 'jquery';
import Banner from '../default/banner';
import AboutUs from '../default/about';
import banner from '../../assets/images/banner/banner.jpg';
import Mission from './mission';
import Teams from './teams';
import { Achivement } from '../default/achivement';

const About = (props) => {

    return (
        <Fragment>
            <Banner title="About Us" image={banner} />
            <AboutUs />
            <Mission />
            <Teams />
            <Achivement />
        </Fragment>
    )
}

export default About;



