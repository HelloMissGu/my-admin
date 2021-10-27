/*
 * @Author: shuhua
 * @Date: 2021-10-26 17:37:12
 * @LastEditTime: 2021-10-27 20:31:12
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\modules\user.js
 */
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const state={
  token: getToken(),
}
const mutations={
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
const actions={
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
      setTimeout(() => {
        resolve({
          aa:'aa'
        })
      }, 500);
    })
  },
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
