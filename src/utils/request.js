import axios from "axios";

// 默认的请求地址
axios.defaults.baseURL = 'http://localhost:3000'

// 添加请求拦截
axios.interceptors.request.use(config => config);

// 添加响应拦截
axios.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err)
});


// 导出
export default axios;
