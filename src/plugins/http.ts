import axios from 'axios';

const http = axios.create({
    // baseURL: process.env.VUE_APP_API_URL
    baseURL: import.meta.env.VITE_API_URL
})

export default http;

// import axios from 'axios';
//
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//
// export default (app) => {
//     app.axios = axios;
//     app.$http = axios;
//
//     app.config.globalProperties.axios = axios;
//     app.config.globalProperties.$http = axios;
// }