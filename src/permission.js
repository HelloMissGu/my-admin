/*
 * @Author: shuhua
 * @Date: 2021-11-03 20:15:32
 * @LastEditTime: 2021-11-10 18:05:54
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
      console.log('hasToken');
      next({path:'/home'})
    }else{
      const hasUserInfo = store.getters.roleName
      console.log('asdf',hasUserInfo);
      if (hasUserInfo) {
        next()
      }else{
        try {
          const userInfo  = await store.dispatch('user/getInfo')
          let roles = userInfo.data.roleName
          console.log('0000',roles);
          

          // 基于角色生成可访问的路线图
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          console.log('1111111',accessRoutes);
          

          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          // next({ ...to, replace: true })
          next()
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
