/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-19 14:26:48
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./permission.js";
import  ElementUI  from "element-ui"
import './styles/element-variables.scss'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(ElementUI)

//解决路由中点击路径重复的问题（vue-router重写push方法）
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
