/*
 * @Author: shuhua
 * @Date: 2021-11-03 21:04:55
 * @LastEditTime: 2021-11-03 21:04:56
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\src\store\getters.js
 */
const getters = {
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
}
export default getters