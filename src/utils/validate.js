/*
 * @Author: shuhua
 * @Date: 2021-10-27 10:02:51
 * @LastEditTime: 2021-11-03 16:42:42
 * @LastEditors: shuhua
 * @Description:
 * @FilePath: \a22_crm_web_admin\src\utils\validate.js
 */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
const validUsername = (str) => {
  return (/^[a-zA-Z0-9]{6,15}$/.test(str))
}

const validEdditPass = (str) => {
  return (/^[a-zA-Z0-9]{6,15}$/.test(str))
}

export function validateUsername(rule, value, callback) {
  if (!validUsername(value)) {
    callback(new Error('Please enter the correct user name'))
  } else {
    callback()
  }
}

export function validatePassword(rule, value, callback) {
  if (!validUsername(value)) {
    callback(new Error('请输入6到15位字母或数字组成的密码'))
  } else {
    callback()
  }
}

export function validateEdditPassword(rule, value, callback) {
  if (value === '******') {
    callback()
  } else if (!validEdditPass(value)) {
    callback(new Error('请输入6到15位字母或数字组成的密码'))
  } else {
    callback()
  }
}

export function validatePhone(rule, value, callback) {
  if (!(/^1[3456789]\d{9}$/.test(value))) {
    callback(new Error('您输入的手机号码格式错误'))
  } else {
    callback()
  }
}

// 校验登录和新增账户的密码为6到18位
export function validatePass(rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 18) {
    callback(new Error('请输入6-18位的密码'))
  } else {
    callback()
  }
}
// 校验登录和新增账户的用户名不能超过18位
export function validateName(rule, value, callback) {
  if (value === '') {
    callback(new Error('请输入账户名'))
  } else if (value.length > 18) {
    callback(new Error('请输入1-18位的账户名称'))
  } else {
    callback()
  }
}

