/**
 * 用户管理页面网络请求方法
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  methods: {
    async getTreeData () {
      let _result = await this.$postNetworkData({
        url: '/baic-pms/baic/projManage/projBudget/yearlyBudget/getVListData',
        params: {
          year: '2020',
          projBudgetManageId: '3644e060a9ed47b6bff1b445203e5c65'
        }
      })
      this.treeData = _result
    }
  }
}
