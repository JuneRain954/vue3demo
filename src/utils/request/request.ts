/**
 * axios封装 
 */ 

import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

type reqType = InternalAxiosRequestConfig<any>;
type reqRetType = InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
type repType = AxiosResponse<any, any>;
type repRetType = AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>;

const BASE_URL = "/api";

// 创建 axios 服务
const axiosInst = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000,
});

// 请求拦截
axiosInst.interceptors.request.use((config: reqType): reqRetType => {
  return config;
})

// 响应拦截
axiosInst.interceptors.response.use((reponse: repType): repRetType => {
  return reponse.data;
}, (err) => {
  // 处理请求失败
  console.log("[interceptors.response] error: ", err);
  return Promise.reject(new Error(err.message));
})

export default axiosInst;