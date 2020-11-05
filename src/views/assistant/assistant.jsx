import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Browser from './browser'
import RouterTable from './router'
import { logout } from '../../services/login'
class Assistant extends Component {

    logoutFunction = () => {
        logout().then(res => {
            this.props.history.push('login')
        })
    }
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Browser logoutFunction={this.logoutFunction} />
                    <RouterTable />
                </Layout>
            </Router>
        )
    }
}


export default Assistant;