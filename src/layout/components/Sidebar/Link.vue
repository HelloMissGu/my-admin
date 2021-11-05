<!--
 * @Author: shuhua
 * @Date: 2021-11-04 20:36:07
 * @LastEditTime: 2021-11-04 20:59:55
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\layout\components\Sidebar\Link.vue
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
// import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
