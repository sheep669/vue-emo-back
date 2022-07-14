/*
 * @Author: sheep669
 * @Description: 请求配置
 * @Date: 2022-06-27 18:46:39
 */
import axios from "axios";

// 默认的请求地址
axios.defaults.baseURL = 'http://localhost:3000'

// 添加请求拦截
axios.interceptors.request.use(config => {
    // let accessToken = localStorage.getItem("token");
    let accessToken = "2324ffegegef";
    
    if (accessToken) {
        config.headers.common['Token'] = accessToken;
    }
    return config
});

// 添加响应拦截
axios.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err)
});


// 导出
export default axios;
