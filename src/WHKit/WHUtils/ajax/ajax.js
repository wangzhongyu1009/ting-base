/**
 * axios全局配置，包括验证校验及错误处理
 * Created by Wang Zhongyu on 2018/12/26.
 */

import axios from 'axios'

axios.defaults.withCredentials = true

const service = axios.create({
  // 请求超时时间
  timeout: 60000,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'accessToken': window.sessionStorage.getItem('access_token')
  }
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data)
    } else {
      return Promise.reject(error)
    }
  }
)

export default service
