/*
 * @Author: shuhua
 * @Date: 2021-11-03 20:15:32
 * @LastEditTime: 2021-11-03 20:20:47
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\permission.js
 */
import router from './router'
import store from './store'
import { getToken } from "@/utils/auth";

router.beforeEach(async (to,from,next)=>{
  const hasToken = getToken()
  if(hasToken){
    if(to.path==='/login'){
      next({path:'/'})
    }
  }
})
