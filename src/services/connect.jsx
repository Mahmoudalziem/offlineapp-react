import axios from 'axios'

class connect {
    
    /// Properties

    token = localStorage.getItem('token');

    baseURL = 'http://127.0.0.1:8000/';

    AXIOS_OPTION = (method,url,data = null,processData = true) => (
        {
            method: method,
            url: url,
            baseURL:this.baseURL,
            contentType: 'application/json',
            data: data,
            headers: {
                'Authorization': `bearer ${localStorage.getItem('token')}`,
            },
            processData: processData
    })

     /////Post Method
    
    postData = (data,url) =>{
        
        return axios(this.AXIOS_OPTION('POST',url,data,true))
    }

     //// Get Method

    getData = (data = null,url) => {

        return axios(this.AXIOS_OPTION('GET', url, data, true))

    }

     //// Put Method

    putData = (data = null, url) => {
        return axios(this.AXIOS_OPTION('Put', url, data, true))
    }

     ///Delete Method
    
    deleteData = (data, url) => {
        
        return axios(this.AXIOS_OPTION('DELETE', url, data, true))
    }
}

export default connect;