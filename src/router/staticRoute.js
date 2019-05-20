/**
 *  基础路由配置
 *  Created by Wang Zhongyu on 2018/10/22.
 */

const Layout = () => import(/* webpackChunkName: 'index' */ '@/WHKit/WHUiKit/Layout/index')

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
    path: '/Example',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: 'Example' */ '@/views/Example/index')
      }
    ]
  }
]

export default staticRoute
