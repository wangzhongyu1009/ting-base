/**
 *  路由判权
 *  Created by Wang Zhongyu on 2018/12/26.
 */

import Vue from 'vue'
import Router from 'vue-router'
import StaticRoute from './staticRoute'
import RouteList from './routeList'

var permissionList = RouteList

function initRoute () {

}

Vue.use(Router)

const router = new Router({
  routes: StaticRoute
})

// 路由跳转前验证
router.beforeEach((to, from, next) => {
  let isPermission = false
  permissionList.forEach((v) => {
    // 判断跳转的页面是否在权限列表中
    if (to.fullPath.indexOf(v) >= 0) {
      isPermission = true
    }
  })
  // 初始化Store
  initRoute()
  // 没有权限时跳转到登陆页面
  if (!isPermission) {
    next({path: '/Login', replace: true})
  } else {
    next()
  }
})

export default router
