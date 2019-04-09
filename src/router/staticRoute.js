/**
 *  基础路由配置
 *  Created by Wang Zhongyu on 2018/10/22.
 */

const Layout = () => import(/* webpackChunkName: 'index' */ '../MDKit/MDUiKit/layout')

const staticRoute = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ '../pages/systemManagement/login')
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: 'test' */ '../pages/orderManagement/test')
      }
    ]
  }
]

export default staticRoute
