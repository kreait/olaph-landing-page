import axios from "axios";


axios.interceptors.request.use(config => {
    config.baseURL = process.env.VUE_APP_BASE_URL;

    const token = localStorage.getItem('token');
    if(token){
        config.headers = {
            'Authorization': token
        };
    }
    return config;
});

export default axios