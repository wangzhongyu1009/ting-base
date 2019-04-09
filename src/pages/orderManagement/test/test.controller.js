/**
 * 页面内调用方法
 * Create By wangzhongyu 2018-12-27
 * 如需修改联系zy.wang@muheda.com
 * @type {Function}
 */

import { testGET, testLogin} from './test.api'

/**
 * [获取表格数据]
 * @param  {[Object]} that [页面实例]
 * @return {[null]}      [无返回值]
 */
const getAjax = async (that) => {
  // 采用同步方式获取接口数据
  let _result = await testGET(that, { menuId: 12, currentPage: that.paginationOption.pageNum, pageSize: that.paginationOption.pageSize })
  
  // 处理数据 将列表数据赋值给表格
  that.tableData = _result.pagedata.items

  // 数据总条数赋值给分页器配置项
  that.paginationOption.total = _result.pagedata.totalNum
}

const login = async (that) => {
  let _result = await testLogin(that, { userAct: 'admin', userPwd: '123456' })
  window.sessionStorage.setItem('access_token', _result.token)
} 

export {
  getAjax, login
}
