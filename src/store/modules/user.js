/*
 * @Author: shuhua
 * @Date: 2021-10-26 17:37:12
 * @LastEditTime: 2021-11-18 16:11:23
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\modules\user.js
 */
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const state={
  token: getToken(),
  userName: '',
  roleName: '',
}
const mutations={
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME:(state,name)=>{
    state.userName = name
  },
  SET_ROLENAME:(state,name)=>{
    state.roleName = name
  }
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
  async getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      
      // let userName=null
      // let roleName = null
      let data={
        userName:'shuhua',
        roleName:['admin']
      }
      commit('SET_USERNAME',data.userName)
      commit('SET_ROLENAME',data.roleName)
      setTimeout(() => {
        resolve({
          data
        })
      }, 500);
      // getInfo(state.token).then(response => {
      //   const { data } = response
      //   // const roles = data.code

      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //   data.avatar = data.avatar || 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      //   const { username, avatar, butTreeList, roleName } = data
      //   commit('SET_NAME', username)
      //   commit('SET_AVATAR', avatar)
      //   commit('SET_ROLENAME', roleName)
      //   commit('SET_BTNPERMISSIONS', butTreeList)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
