/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:40:19
 * @LastEditTime: 2021-11-10 17:32:59
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
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
