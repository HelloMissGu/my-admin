/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-10 21:01:58
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from "@/layout/index"
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children:[
      {
        path:'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
      }
    ]
  },
  
]
export const asyncRoutes = [ 

  {
    path: '/userManage',
    component: Layout,
    name:'UserManage',
    redirect: '/userManage',
    meta: {
      title: '用户管理',
      roles: ['admin'],
      icon: 'el-icon-tickets',
      // if do not set roles, means: this page does not require permission
    },
    children:[
      {
        path:'/userManage',
        component: () => import('@/views/userManage/index'),
        name: 'UserManage',
        meta: {
          title: '用户管理',
          roles: ['admin'],
          icon: 'el-icon-tickets',
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/reserveManage',
    component: Layout,
    name:'reserveManage',
    redirect: '/reserveManage',
    meta: {
      title: '预约管理', 
      roles: ['admin'],
      icon: 'el-icon-tickets', 
      access: 'ReserveManage' 
    },
    children: [
      {
        path: 'reserveManage',
        name: 'ReserveManage',
        component: () => import('@/views/reserveManagement/index'),
        meta: {
          title: '预约管理', 
          roles: ['admin'],
          icon: 'el-icon-tickets', 
          access: 'ReserveManage' 
        }
      }
    ]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
