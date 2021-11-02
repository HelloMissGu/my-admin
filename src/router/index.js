/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-02 20:49:25
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    // component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
    component: () => import('@/views/dashboard/index')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
