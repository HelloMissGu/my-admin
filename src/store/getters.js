/*
 * @Author: shuhua
 * @Date: 2021-11-03 21:04:55
 * @LastEditTime: 2021-11-19 17:16:00
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\getters.js
 */
const getters = {
  roles: state => state.user.roles,
  roleName:state=>state.user.roleName,
  permission_routes: state => state.permission.routes,
  sidebar: state => state.app.sidebar,
}
export default getters