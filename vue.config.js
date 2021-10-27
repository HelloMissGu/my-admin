/*
 * @Author: shuhua
 * @Date: 2021-10-26 16:55:18
 * @LastEditTime: 2021-10-26 16:57:13
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-admin\vue.config.js
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

var webpack = require('webpack')
module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      // other modules
      introJs: ['intro.js']
    }])
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}