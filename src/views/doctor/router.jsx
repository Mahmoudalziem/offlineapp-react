import React, { Fragment, Component } from 'react'
import { message } from 'antd';
import { Route, Switch,withRouter } from 'react-router-dom'

/// Load Component

import View from './materials/view'
import Add from './materials/add'
import MakeQuiz from './makequiz/makequiz'
import ResultQuiz from './resultquiz/resultquiz'
import ViewInstructors from './instructors/viewInstructor'
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
                                    <Route exact path="/doctor" component={View} />
                                    <Route path="/doctor/materials/third" component={View} />
                                    <Route path="/doctor/materials/second" component={View} />
                                    <Route path="/doctor/materials/first" component={View} />
                                    <Route path="/doctor/materials/add" {...this.props} component={Add}/>
                                    <Route path="/doctor/quiz/fourth" component={MakeQuiz} />
                                    <Route path="/doctor/quiz/third" component={MakeQuiz} />
                                    <Route path="/doctor/quiz/second" component={MakeQuiz} />
                                    <Route path="/doctor/quiz/first" component={MakeQuiz} />
                                    <Route path="/doctor/final/fourth" component={ResultQuiz} />
                                    <Route path="/doctor/final/third" component={ResultQuiz} />
                                    <Route path="/doctor/final/second" component={ResultQuiz} />
                                    <Route path="/doctor/final/first" component={ResultQuiz} />
                                    <Route path="/doctor/instructors" component={ViewInstructors} />
                                    <Route path="/doctor/settings" component={Settings} />
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