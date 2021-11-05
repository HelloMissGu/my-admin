<!--
 * @Author: shuhua
 * @Date: 2021-11-03 15:57:28
 * @LastEditTime: 2021-11-04 20:58:55
 * @LastEditors: shuhua
 * @Description: 左侧路由栏
 * @FilePath: \my-admin\src\layout\components\Sidebar\sidebarItem.vue
-->
<template>
<div v-if="!item.hidden">
  <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
  </template>
  <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
  </el-submenu>
</div>
</template>
<script>
import path from 'path'
import AppLink from './Link'
export default {
  name:'SidebarItem',
  components: {  AppLink },
  data(){
    // 使用render函数重构
    this.onlyOneChild = null
    return{}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // 临时设置（如果只有一个显示子项，则将使用）
          this.onlyOneChild = item
          return true
        }
      })
      // 当只有一个子路由器时，默认情况下显示子路由器
      if (showingChildren.length === 1) {
        return true
      }
      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang='scss'>

</style>