/**
 * 用户管理页面私有方法
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  methods: {
    catalogRow (item) {
      this.catalogRowId = item.id
    },
    add () {
      console.log('点击了添加')
    }
  }
}