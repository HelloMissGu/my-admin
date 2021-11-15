/*
 * @Author: shuhua
 * @Date: 2021-11-03 20:15:32
 * @LastEditTime: 2021-11-15 20:36:39
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\permission.js
 */
import router from './router'
import store from './store'
import { getToken } from "@/utils/auth";
console.log('router',router);

router.beforeEach(async (to,from,next)=>{
  
  const hasToken = getToken()
  console.log('a11',hasToken);
  if(hasToken){
    if(to.path==='/login'){
      next({path:'/'})
    }else{
      const hasUserInfo = store.getters.roleName
      if (hasUserInfo) {
        next()
      }else{
        try {
          const userInfo  = await store.dispatch('user/getInfo')
          let roles = userInfo.data.roleName
          
          // 基于角色生成可访问的路线图
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          
          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)

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
    
    
      
  }
})
