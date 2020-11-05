import React, { Fragment, Component } from "react"
import { withRouter } from 'react-router-dom'
import Browser from './views/layouts/browser/browser';
import Navbar from './views/layouts/navbar/navbar';
import Footer from './views/layouts/footer/footer';
import ScrollBar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { check as checkAuth } from './services/login';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathnameStatus: true
        }
    }
    
    componentDidMount() {

        if (localStorage.getItem('token')) {

            checkAuth().then(res => {

                if (!res.status) {
                    
                    localStorage.clear();

                    return this.props.history.push('login');
                }
            })
        }
        
        const arrayLinks = ['doctor', 'login', 'forget', 'manage', 'lecture', 'forget'];

        if (this.props.location) {

            for (let x of arrayLinks) {

                if (this.props.location.pathname.indexOf(x) > -1) {
                    this.setState(
                        {
                            pathnameStatus: !this.state.pathnameStatus
                        }
                    )
                    break;
                }
                continue;
            }
        }
    }
    componentDidUpdate(prevProps) {

        const arrayLinks = ['doctor', 'login', 'forget', 'manage', 'lecture', 'forget'];

        if (this.props.location !== prevProps.location) {
            for (let x of arrayLinks) {
                if (this.props.location.pathname.indexOf(x) > -1) {
                    this.setState(
                        {
                            pathnameStatus: false
                        }
                    )
                    break;
                } else {
                    this.setState(
                        {
                            pathnameStatus: true
                        }
                    )
                }
            }
        }

        
    }

    render() {
        return (
            <Fragment>
                <ScrollBar component="div">
                {this.state.pathnameStatus ? <Navbar {...this.props} loading={false} /> : null}
                <Browser />
                    {(this.state.pathnameStatus && this.props.location.pathname !== '/profile') ? <Footer /> : null}
                </ScrollBar>
            </Fragment>
        )
    }
}



export default withRouter(App);