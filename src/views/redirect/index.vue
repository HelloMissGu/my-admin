<!--
 * @Author: shuhua
 * @Date: 2021-11-02 20:19:08
 * @LastEditTime: 2021-11-02 20:19:08
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\views\redirect\index.vue
-->
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query }) //替换路由地址
  },
  render: function(h) {
    return h() 
  }
}
</script>