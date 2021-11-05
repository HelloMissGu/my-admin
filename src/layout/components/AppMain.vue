<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:04:27
 * @LastEditTime: 2021-11-05 17:00:03
 * @LastEditors: shuhua
 * @Description: 路由过渡
 * @FilePath: \my-admin\src\layout\components\AppMain.vue
-->
<template>
<div class="content-container">
  内容区
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
<style lang='scss'>
.content-container{
  height: 100%;
  background-color: #ccc;
}
</style>