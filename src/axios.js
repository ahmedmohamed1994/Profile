import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
})
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
           // config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

    instance.interceptors.response.use((response) => {
        return response
     },
      (error)=> {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
     
            originalRequest._retry = true;
            return axios.post('/auth/token',
                {
                    "refresh_token": localStorage.getItem('refresh_token')
                })
                .tan(res => {
                    if (res.status === 201) {
                        // 1) put token to LocalStorage
                        localStorage.setItem('token',res.data.token);
     
                        // 2) Change Authorization header
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem;
     
                        // 3) return originalRequest object wif Axios.
                        return axios(originalRequest);
                    }
                })
        }
     
        // return Error object wif Promise
        return Promise.reject(error);
     });    
export default instance