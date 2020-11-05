import { getProfile, login } from '../services/login'

export const actionGetProfile = (props) => {

    return (dispatch) => {

        dispatch({ type: 'RESTART_AUTH' });

        dispatch({ type: 'LOADING' });

        return getProfile(props)
            .then(res => {
                dispatch({
                    type: 'GETSTUDENT',
                    payload: {
                        name: res.name,
                        email: res.email,
                        avatar: res.avatar,
                        department: res.department,
                        section : res.section
                    }
                })

                return res
            })
            .catch(error => {
                dispatch({
                    type: 'GETSTUDENT_ERROR',
                    error
                })

                return error
            })
    }

}
export const actionLogin = (props) => {
    return (dispatch) => {

        dispatch({ type: 'RESTART_AUTH' });

        dispatch({ type: 'LOADING' });

        return login(props.values)

            .then(res => {

                if (res.status) {

                    let data = res.data;

                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            token: data.token,
                            rule: data.rule,
                            status: res.status
                        }
                    })  

                    localStorage.setItem('token', data.token)

                    localStorage.setItem('rule', data.rule)

                    return res

                } else {

                    return res
                }
            })
            .catch(error => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    error
                })

                return error
            })
    }
}





