import React, { Fragment, useEffect } from 'react';
import $ from 'jquery';
import Banner from '../default/banner';
import AboutUs from '../default/about';
import { Achivement } from '../default/achivement';
import Years from './years';
import Department from '../default/departments';
import banner from '../../assets/images/banner/banner.jpg';
const Collage = (props) => {

    return (
        <Fragment>
            <Banner title="About Collage" image={banner} />
            <AboutUs />
            <Years />
            <Department />
            <Achivement />
        </Fragment>
    )
}

export default Collage;



