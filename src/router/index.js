/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-08 00:28:17
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
    redirect: '/userManage',
    children:[
      {
        path:'/userManage',
        component: () => import('@/views/userManage/index'),
        name: 'UserManage',
        meta: {
          title: 'Directive Permission',
          roles: ['admin']
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  // {
  //   path:'/userManage',
  //   component:()=>import('@views/userManage/index'),
  //   name:'UserManage',
    
  // },
  // {
  //   path:'/reserveManagement',
  //   component:()=>import('@views/reserveManagement/index'),
  //   name:'ReserveManagement', 
  // }
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'Role Permission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/reserve',
  //   component: Layout,
  //   redirect: '/reserveManage',
  //   children: [
  //     {
  //       path: 'reserveManage',
  //       name: 'ReserveManage',
  //       component: () => import('@/views/reserveManagement/index'),
  //       meta: { title: '预约管理', icon: 'el-icon-tickets', access: 'ReserveManage' }
  //     }
  //   ]
  // },
]

const createRouter = () => new Router({
  mode: 'history', // require service support
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
