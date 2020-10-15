/**
 *  基础路由配置
 *  Created by Wang Zhongyu on 2018/10/22.
 */

const LocalLayout = window.localStorage.getItem('layout')

let Layout = null
if (LocalLayout === 'H') {
  Layout = () => import(/* webpackChunkName: 'index' */ '@/WHKit/WHUiKit/Layout/index')
} else {
  Layout = () => import(/* webpackChunkName: 'index' */ '@/WHKit/WHUiKit/VLayout/index')
}

const staticRoute = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'Login' */ '@/views/Login/index')
  },
  {
    path: '/System',
    component: Layout,
    children: [
      {
        path: '/System/DropDown',
        name: 'DropDown',
        component: () => import(/* webpackChunkName: 'Example' */ '@/views/System/DropDown/index')
      },
      {
        path: '/System/Example',
        name: 'Example',
        component: () => import(/* webpackChunkName: 'Example' */ '@/views/System/Example/index')
      }
    ]
  }
]

export default staticRoute
