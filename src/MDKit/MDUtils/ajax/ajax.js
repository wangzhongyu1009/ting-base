/**
 * axios全局配置，包括验证校验及错误处理
 * Created by Wang Zhongyu on 2018/12/26.
 */

import axios from 'axios'
import { Loading, Message } from 'element-ui'

const service = axios.create({
  // 请求超时时间
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

service.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('access_token')
    if (token) {
      config.headers['x-requested-with'] = token
    }
    if (config.showLoading) showFullScreenLoading()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.config.showLoading) tryHideFullScreenLoading()
      console.log(response)
    return response
  },
  error => {
    tryHideFullScreenLoading()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          showErrMessage('错了哦，401')
          break
        case 403:
          showErrMessage('错了哦，403')
          break
        default:
          showErrMessage('错了哦，服务器错误')
      }
      return Promise.reject(error.response.data)
    } else {
      showErrMessage('错了哦，服务器错误')
      return Promise.reject(error)
    }
  }
)

let needLoadingRequestCount = 0
let loadingInstance = null

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    loadingInstance = Loading.service({
      fullscreen: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) loadingInstance.close()
}

export function showErrMessage (msg) {
  Message({
    showClose: true,
    message: msg,
    type: 'error'
  })
}

export default service
