<!--
 * @Author: shuhua
 * @Date: 2021-11-17 14:24:09
 * @LastEditTime: 2021-11-18 20:47:38
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
      <div @click="handleLink(item)">{{ item.meta.title }}</div>
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
      this.levelList = matched.filter(item=>item.meta.title)
    },
    // pathCompile(path) {
    //   // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    //   const { params } = this.$route
    //   var toPath = pathToRegexp.compile(path)
    //   return toPath(params)
    // },
    handleLink(item){
      // const { redirect, path } = item
      // if (redirect) {
      //   this.$router.push(redirect)
      //   return
      // }
      this.$router.push(item.path)
    }
  }
}
</script>
<style lang='scss'>

</style>
