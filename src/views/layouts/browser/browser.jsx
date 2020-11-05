import React, {Fragment } from "react";
import { Switch, Route } from "react-router-dom"
import PrivateRoute from '../../../router/privateroute';
import {AuthRoute} from '../../../router/authRoute';
/// Handling Components

import Home from '../../home/home';
import About from '../../about/about';
import Collage from '../../collage/collage';
import Courses from '../../courses/courses';
import Contact from '../../contact/contact';
import ViewCourse from '../../courseshow/courseShow';
import Doctor from '../../doctor/doctor';
import Management from '../../management/management';
import Assistant from '../../assistant/assistant';  
import Profile from "../../profile/profile";
import PageNotFound from '../../notfound/notfound'

//// Login Rules

import Login from '../../login/login';
import { connect } from "react-redux";

const Browser = (props) => {

    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/collage" component={Collage} />
                <Route path="/courses" component={Courses} />
                <AuthRoute path="/login" {...props} component={Login} />
                <Route path="/course/:slug" component={ViewCourse} />
                <PrivateRoute {...props} path="/doctor" component={Doctor} />
                <PrivateRoute {...props} path="/manage" component={Management} />
                <PrivateRoute {...props} path="/lecture" component={Assistant} />
                <PrivateRoute {...props} path="/profile" component={Profile} />
                <Route component={PageNotFound} />
            </Switch>
        </Fragment>
    )
}

const mapStateToProps = state => state.authorization;

export default connect(mapStateToProps,null)(Browser);