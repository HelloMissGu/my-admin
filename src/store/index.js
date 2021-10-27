/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-10-27 20:28:29
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import  user  from "./modules/user.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user
  }
})
export default store
