<!--
 * @Author: shuhua
 * @Date: 2021-11-04 16:40:29
 * @LastEditTime: 2021-11-10 20:59:40
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\layout\components\Sidebar\Item.vue
-->
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>