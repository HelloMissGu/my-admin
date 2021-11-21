/*
 * @Author: shuhua
 * @Date: 2021-11-03 20:15:32
 * @LastEditTime: 2021-11-16 17:21:16
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\permission.js
 */
import router from './router'
import store from './store'
import { getToken } from "@/utils/auth";
console.log('router',router);
const whiteList = ['/login']
router.beforeEach(async (to,from,next)=>{
  
  const hasToken = getToken()
  
  if(hasToken){
    if(to.path==='/login'){
      next({path:'/'})
    }else{
      const hasUserInfo = store.getters.roleName
      if (hasUserInfo) {
        console.log('111');
        
        next()
      }else{
        try {
          const userInfo  = await store.dispatch('user/getInfo')
          let roles = userInfo.data.roleName
          
          // 基于角色生成可访问的路线图
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          
          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)
          console.log('222',accessRoutes,accessRoutes.path);
          
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          // next({ ...to, replace: true })
          next({ ...to, replace: true })
          // next()
        }catch (error){
          console.log('error',error);
          next()
        }
      }
      
    }
  }else{
    console.log('0000');
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
      
  }
})
