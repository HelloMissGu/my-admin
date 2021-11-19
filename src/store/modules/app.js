/*
 * @Author: shuhua
 * @Date: 2021-11-19 16:43:56
 * @LastEditTime: 2021-11-19 17:12:47
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\modules\app.js
 */
import Cookies from 'js-cookie'
const state = {
  sidebar:{
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
  }
}
const mutations={
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  }
}
const actions={
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}
export default{
  namespaced: true,
  state,
  mutations,
  actions
}
