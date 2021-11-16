/*
 * @Author: shuhua
 * @Date: 2021-11-03 20:30:03
 * @LastEditTime: 2021-11-16 17:41:17
 * @LastEditors: shuhua
 * @Description: 路由权限
 * @FilePath: \my-admin\src\store\modules\permission.js
 */
import { constantRoutes,asyncRoutes } from "@/router"

/** 使用meta.role确定当前用户是否具有权限
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    console.log('roles',route.meta.roles,roles);
    
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/** 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 * 反复调用filterAsyncRoutes
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    } 
  })
  
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}
// 权限过滤
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        console.log('yyyy',roles);
        
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        console.log('zzzzz',accessedRoutes);
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
