<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:04:27
 * @LastEditTime: 2021-12-22 20:07:37
 * @LastEditors: shuhua
 * @Description: 路由过渡
 * @FilePath: \my-admin\src\layout\components\AppMain.vue
-->
<template>
<div class="content-container">
  内容区{{$route.path}}
  <router-view :key="key" />
</div>
</template>
<script>
export default {
name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path
    }
  }
}
</script>
<style >
.content-container{
  height: 100%;
  background-color: #ccc;
}
</style>