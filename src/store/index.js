/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-10 16:54:13
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import  user  from "./modules/user.js"
import permission from "./modules/permission"
import getters from "./getters";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user,
    permission,
  },
  getters
})
export default store
