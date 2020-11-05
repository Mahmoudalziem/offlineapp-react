import React, { Component, Fragment } from 'react';
/// Fire Plugins

import './script';

/// Components
import Slider from './slider';   
import AboutUs from '../default/about';
import Department from '../default/departments';
import Doctor from "./doctors";
import Courses from './courses';
import { Achivement } from '../default/achivement';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Slider />
                <AboutUs />
                <Department />
                <Courses />
                <Doctor />
                <Achivement />
            </Fragment>
        );
    }
}

export default Home;
