import axios from 'axios';

// 创建一个axios实例 接口统一处理
const service = axios.create({
    baseURL: process.env.API_ROOT,   // 接口地址
    timeout: 8000
});

service.interceptors.request.use(config => {
    // 全屏loading加载
    if (!config.headers.hideLoading) {
        delete config.headers.hideLoading;
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    return config;
}, error => {
    return Promise.reject(error);
})

// http 响应拦截器
service.interceptors.response.use(response => {  // 响应成功 关闭 loading
    const { code } = response.data;
    
    if (code === 200) {
        return response.data;
    // } else {
    //     return response.data;
    }
}, error => {
    return Promise.reject(error);
});

export default service;
