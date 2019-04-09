/**
 * 页面数据初始化
 * Create By wangzhongyu 2018-12-27
 * 如需修改联系zy.wang@muheda.com
 * @type {Object}
 */

const InitializeData = {
  // 表格初始化数据
  tableData: [],

  // 分页器初始化数据
  paginationOption: {
    // 总数
    total: 0,
    // 当前页码
    pageNum: 1,
    // 每页显示个数
    pageSize: 2
  },

  // 文本框数值
  input: '',

  // 本地测试数据
  localData: ''
}

export {
  InitializeData
}
