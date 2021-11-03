<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:03:43
 * @LastEditTime: 2021-11-03 15:48:14
 * @LastEditors: shuhua
 * @Description: 布局
 * @FilePath: \my-admin\src\layout\index.vue
-->
<template>
<div class="app-index">
  <div class="sidebar-container">
    <Sidebar/>
  </div>
  <div class="main-container">
    <div class="fixed-header">
      <Navbar/>
    </div>
    <AppMain/>
  </div>
</div>
</template>
<script>
// 需要在components新建一个js导出如下文件，才可以引入
import { Navbar, Sidebar, AppMain } from './components'
export default {
  name:'Layout',
  components:{
    Sidebar,
    Navbar,
    AppMain
  },
}
</script>
<style lang='scss'>
@import '@/styles/variables.scss';
.app-index{
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  position: relative;
  height: 100%;
  width: 100%;
  .fixed-header{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
}
</style>
