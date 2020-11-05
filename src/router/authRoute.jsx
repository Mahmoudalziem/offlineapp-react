import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const AuthRoute = ({ component: Component, ...res }) => (

    <Route {...res} strict sensitive render={
        (props) => {
            const token = localStorage.getItem('token'),
                rule = localStorage.getItem('rule')
            
            if (token) {
                switch (rule) {
                    case 'student':
                        return (
                        <Redirect to={{
                            pathname: '/profile',
                            state: {
                                from: props.location
                            }
                        }} />
                        )
                    case 'doctor':
                        return (
                            <Redirect to={{
                            pathname: '/doctor',
                            state: {
                                from: props.location
                            }
                        }} />
                        )
                    case 'manage':
                        return (
                            <Redirect to={{
                                pathname: '/manage',
                                state: {
                                    from: props.location
                                }
                            }} />
                        )
                    case 'lecture':
                        return (
                            <Redirect to={{
                                pathname: '/lecture',
                                state: {
                                    from: props.location
                                }
                            }} />
                        )
                    default: 
                        return false
                }
            } else {
                
                return (
                    <Component {...props} />
                )
            }
        }
    } />
)