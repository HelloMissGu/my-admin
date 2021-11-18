<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:02:17
 * @LastEditTime: 2021-11-18 16:33:38
 * @LastEditors: shuhua
 * @Description: 头部导航栏
 * @FilePath: \my-admin\src\layout\components\Navbar.vue
-->
<template>
<div class="navbar">
  头部导航
  <breadcrumb id="breadcrumb-container"/>
</div>
</template>
<script>
import  breadcrumb from "@/components/Breadcrumb/index.vue"
export default {
  name:'Navbar',
  components: {  breadcrumb },
  
}
</script>
<style lang='scss'>

</style>
