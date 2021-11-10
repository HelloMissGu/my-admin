<!--
 * @Author: shuhua
 * @Date: 2021-11-02 21:01:54
 * @LastEditTime: 2021-11-10 18:07:08
 * @LastEditors: shuhua
 * @Description: 侧边栏
 * @FilePath: \my-admin\src\layout\components\Sidebar\index.vue
-->
<template>
<div class="side-bar">
  侧边栏
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
    ]),
    path(){
      return this.$route.path
    }
  },
  mounted(){

    console.log('111777777777777777777',this.permission_routes,this.$route.path);
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang='scss'>
.side-bar{
  height: 100%;
  background-color: #007acc;
}
</style>