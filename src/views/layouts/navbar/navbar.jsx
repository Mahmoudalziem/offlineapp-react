import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo/fci.jpg';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

// import zagazig from '../../../assets/images/logo/zagazig.jpg';

const NavItem = ({ to, label }) => (

    <li className="nav-item">
        <NavLink exact={true} className="nav-link" to={to}>
            {label}
        </NavLink>
    </li>

)

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: props.loading,
            rule: localStorage.getItem('rule'),
            status: props.status
        }
    }

    handlingProfile = () => {

        const permission = this.state.rule;

        switch (permission) {
            case 'doctor':
                return '/doctor'
            case 'manage':
                return '/manage'
            case 'lecture':
                return '/lecture'
            case 'student':
                return '/profile'
            default: 
                return false
        }
    }

    componentWillUpdate(prevProps) {

        if (prevProps.location !== this.props.location) {
            this.setState({
                loading: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.location !== this.props.location) {

            this.setState({
                loading: false
            })

        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavLink exact className="navbar-brand" to="/">
                    <img src={logo} alt="Site Logo" title="site Logo" />
                </NavLink>
                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About Us" />
                        <NavItem to="/contact" label="Contact Us" />
                        <NavItem to="/collage" label="About Collage" />
                        <NavItem to="/courses" label="Courses" />
                        {
                            (this.state.rule) ? <NavItem to={this.handlingProfile} label="Profile" /> : <NavItem to="/login" label="Login" />
                        }
                    </ul>
                </div>

                <div className="mr-4">
                    {
                        <Spin spinning={this.state.loading} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => state.authorization;

export default connect(mapStateToProps)(Navbar);