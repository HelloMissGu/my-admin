/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-16 17:43:13
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
    redirect: '/userManage/helpConfig',
    meta: {
      title: '用户管理',
      roles: ['admin'],
      icon: 'el-icon-tickets',
      // if do not set roles, means: this page does not require permission
    },
    children:[
      {
        path:'/helpConfig',
        component: () => import('@/views/userManage/helpConfig/index'),
        name: 'helpConfig',
        meta: {
          title: '帮助配置',
          roles: ['admin'],
          icon: 'el-icon-tickets',
        }
      },
      {
        path:'/homeConfig',
        component: () => import('@/views/userManage/homeConfig/index'),
        name: 'homeConfig',
        meta: {
          title: '首页配置',
          roles: ['admin'],
          icon: 'el-icon-tickets',
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理', 
      roles: ['admin','customer'],
      icon: 'el-icon-tickets', 
    },
    children: [
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/system/role/index'),
        meta: {
          title: '角色', 
          roles: ['admin'],
          icon: 'el-icon-tickets', 
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/system/user/index'),
        meta: {
          title: '用户', 
          roles: ['customer'],
          icon: 'el-icon-tickets', 
        }
      }
    ],
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
