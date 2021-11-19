/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-19 17:14:58
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import  user  from "./modules/user.js"
import permission from "./modules/permission"
import getters from "./getters";
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user,
    permission,
    app
  },
  getters
})
export default store
