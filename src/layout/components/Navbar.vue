<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:02:17
 * @LastEditTime: 2021-11-19 15:44:39
 * @LastEditors: shuhua
 * @Description: 头部导航栏
 * @FilePath: \my-admin\src\layout\components\Navbar.vue
-->
<template>
<div class="navbar">
  <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
  <breadcrumb id="breadcrumb-container"/>
</div>
</template>
<script>
import  breadcrumb from "@/components/Breadcrumb/index.vue"
import Hamburger from '@/components/Hamburger'
import { mapGetters } from 'vuex'
export default {
  name:'Navbar',
  components: {  breadcrumb,Hamburger },
  computed:{
    ...mapGetters([
      'sidebar'
    ])
  },
  methods:{
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  }
}
</script>
<style lang='scss'>

</style>
