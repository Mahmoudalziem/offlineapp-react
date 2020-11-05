import connect from './connect'

const http = new connect();
export const getProfile = (props) => {

    const rule = localStorage.getItem('rule');

    let url = `api/${rule}/info`;

    return http.postData(props,url)

        .then(response => {

            return response.data
        })
        .catch(error => {

            return error

        })
}

export const login = (props) => {

    const url = 'api/login';

    return http.postData(props, url)

        .then(response => {

            return response.data
        })
        .catch(error => {

            return error
        })
}


export const logout = (props) => {

    const rule = localStorage.getItem('rule');

    const url = `api/${rule}/logout`;

    return http.postData(props, url)

        .then(response => {

            let data = response.data;

            if (data.status) {

                localStorage.clear();
            }
        })
        .catch(error => {

            return error
        })
}

export const check = (props) => {

    const rule = localStorage.getItem('rule'),

        url = `api/${rule}/check`;

    return http.postData(null, url)

        .then(response => {

            return response.data
        })
        .catch(error => {

            return error
        })
}