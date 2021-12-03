/*
 * @Author: shuhua
 * @Date: 2021-10-26 17:37:12
 * @LastEditTime: 2021-11-22 19:47:21
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
  roles: []
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
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
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
      let data={
        userName:'shuhua',
        token:'111'
      }
      commit('SET_TOKEN', data.token),
      setToken(data.token)
      setTimeout(() => {
        resolve(data)
      }, 500);
    })
  },
  async getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      
      let data={
        userName:'shuhua',
        roleName:['admin'],
        roles:['admin']
      }
      commit('SET_USERNAME',data.userName)
      commit('SET_ROLENAME',data.roleName)
      commit('SET_ROLES', data.roles)
      setTimeout(() => {
        resolve(data)
      }, 500);
    })
  },
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLENAME', [])
        commit('SET_ROLES',[])
        removeToken()
        resetRouter()
        setTimeout(() => {
          resolve()
        }, 500)
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
