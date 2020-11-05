import React from 'react'
import { Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...res }) => {

    const token = localStorage.getItem('token'),
        pathname = res.path

        const RouteComponent = (props) => {
            return (
                (pathname !== props.url) ? (
                    <Redirect to={{
                        pathname: '/login',
                        state: {
                            from: props.location
                        }
                    }} />
                ) : <Component {...props} />
            )
        }

    return (
        <Route {...res} strict sensitive render={
            (props) => {

                if (token) {

                    switch (res.rule) {
                        case 'student':
                            return <RouteComponent {...props} url="/profile"/>
                        case 'doctor':
                            return <RouteComponent {...props} url="/doctor" />
                        case 'manage':
                            return <RouteComponent {...props} url="/manage" />
                        case 'lecture':
                            return <RouteComponent {...props} url="/lecture" />
                        default:
                            return (
                                <Redirect to={{
                                    pathname: '/login',
                                    state: {
                                        from: props.location
                                    }
                                }} />
                            )

                    }
                } else {

                    return (
                        <Redirect to={{
                            pathname: '/login',
                            state: {
                                from: props.location
                            }
                        }} />
                    )
                }
            }
        } />
    )
}


export default PrivateRoute;