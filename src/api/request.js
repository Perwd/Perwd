import axios from "axios";

import nProgress from "nprogress";
// start :进度条开始  done：进度条结束

// 引入样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    // 基础路径,发请求时,路径会带有api
    baseUrl: '/api',
    // 超时时间
    timeout: 5000,
})
// //请求拦截器:在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
// requests.interceptors.request.use((config) => {
//     // config 配置对象 ，对象里面有一个属性很重要，header请求头
//     // 进度条开始
//     nProgress.start();
//     return config;

// });


// requests.interceptors.response.use((res) => {
//     // 成功回调函数

//     // 进度条结束
//     nProgress.done();
//     return res.data;
// }, (error) => {
//     // 响应失败回调函数
//     // 中止Promise链
//     return Promise.reject(new Error('faile'));
// });


export default requests;