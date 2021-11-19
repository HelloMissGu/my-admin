<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:03:43
 * @LastEditTime: 2021-11-19 17:27:07
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
    <div class="content-container">
    <AppMain/>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  .sidebar-container{
    flex: 0.1;
    height:calc(100vh - 18px);
    
  }
  .main-container{
    flex: 0.9;
    .fixed-header{
      height: 80px;
    }
    .content-container{
      height: calc(100vh - 100px);
    }
  }
}
</style>
