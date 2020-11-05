import React, { Fragment, Component } from 'react'
import { message } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom'

/// Load Component

import Sections from './sections/sections'
import Tasks from './tasks/tasks'
import Settings from './settings/settings'

///////

import { Layout } from 'antd';
const { Content } = Layout;
class RouterTable extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.location !== prevProps.location) {

            window.scrollTo(0, 0)
        }

    }
    
    render() {
        return (
            <Fragment>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} >
                        <div className="container">
                            <div className="site-layout-background">
                                <Switch>
                                    <Route exact path="/lecture" component={Sections} />
                                    <Route exact path="/lecture/sections/fourth" component={Sections} />
                                    <Route path="/lecture/sections/third" component={Sections} />
                                    <Route path="/lecture/sections/second" component={Sections} />
                                    <Route path="/lecture/sections/first" component={Sections} />
                                    <Route path="/lecture/tasks/fourth" component={Tasks} />
                                    <Route path="/lecture/tasks/third" component={Tasks} />
                                    <Route path="/lecture/tasks/second" component={Tasks} />
                                    <Route path="/lecture/tasks/first" component={Tasks} />
                                    <Route path="/lecture/settings" component={Settings} />
                                </Switch>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Fragment >
        )
    }
}

export default withRouter(RouterTable)