import React, { Fragment, Component } from 'react'
import { message } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom'

/// Load Component

import Fourth from './students/fourth'
import Default from './students/default'
import Doctors from './doctors/doctors'
import ViewInstructors from './instructors/instructor'
import Affairs from './affairs/affairs'
import Subjects from './subjects/subjects'
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
                                    <Route exact path="/manage" component={Fourth} />
                                    <Route exact path="/manage/students/fourth" component={Fourth} />
                                    <Route path="/manage/students/third" component={Default} />
                                    <Route path="/manage/students/second" component={Default} />
                                    <Route path="/manage/students/first" component={Default} />
                                    <Route path="/manage/doctors" component={Doctors} />
                                    <Route path="/manage/instructors" component={ViewInstructors} />
                                    <Route path="/manage/subjects" component={Subjects} />
                                    <Route path="/manage/affairs" component={Affairs} />
                                    <Route path="/manage/settings" component={Settings} />
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