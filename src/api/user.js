/*
 * @Author: shuhua
 * @Date: 2021-10-26 17:56:43
 * @LastEditTime: 2021-10-26 18:01:28
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\api\user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/manager/mgr/user/login',
    method: 'post',
    data
  })
}
