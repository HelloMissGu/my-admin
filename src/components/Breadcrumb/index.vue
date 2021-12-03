<!--
 * @Author: shuhua
 * @Date: 2021-11-17 14:24:09
 * @LastEditTime: 2021-11-22 21:02:03
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\components\Breadcrumb\index.vue
-->
<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="index">
      <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
  name:'Breadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    //路由切换
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created(){
    console.log('match',this.$route.matched);
    this.getBreadcrumb()
  },
  methods:{
    getBreadcrumb(){
      // 显示路由标题
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // const first = matched[0]
      // if (!this.isDashboard(first)) {
      //   matched = [{ path: '/system', meta: { title: '系统管理' }}].concat(matched)
      // }
      this.levelList = matched.filter(item=>item.meta.title)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    handleLink(item){
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>
<style lang='scss'>

</style>
