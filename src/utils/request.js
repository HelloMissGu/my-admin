/*
 * @Author: shuhua
 * @Date: 2021-10-26 17:58:19
 * @LastEditTime: 2021-10-26 18:00:42
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\utils\request.js
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
