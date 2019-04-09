/**
 * 测试页面方法
 * Created By Wangzhongyu 2018-12-27
 * 如需修改联系zy.wang@muheda.com
 */

import { InitializeData } from './test.data.js'
import { getAjax, login } from './test.controller.js'
export default {

  // 同步加载自定义组件
  components: {

  },

  // 页面内初始化数据
  data () {
    return InitializeData
  },

  // 组件实例刚被创建，组件属性计算之前，$el,$data均不存在
  beforeCreate () {
    // 在这里加loading
    // console.log(TING, 999)
    // console.log(TING.getNowDateStr(), 123)
    // console.log(TING.getNowDateStr111(), 222)
  },

  // 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在
  async created () {
    // 这里结束loading，做一些初始化的方法，进行一些无需DOM操作的数据请求
    await login(this)
    await getAjax(this)
    this.setLocalData('test', 'test')
  },

  // 模版编译/挂载之前
  beforeMount () {

  },

  // 模版编译/挂载之后
  mounted () {
    // 发起请求，进行数据处理，配合路由
    // getAjax(this)
    this.localData = this.getLocalData('test')
  },

  // 组件更新之前
  beforeUpdate () {
    // 适用于子组件
  },

  // 组件更新之后
  updated () {
    // 适用于子组件
  },

  // 组件销毁前调用
  beforeDestory () {
    // 销毁前确认
  },

  // 组件销毁后调用
  destoryed () {
    // 清空相关内容，释放内存
  },

  // 私有方法
  methods: {
    // 分页器切换每页显示条数
    handleSizeChange(val) {
      this.paginationOption.pageSize = val
      getAjax(this)
    },
    // 分页器切换当前页码
    handleCurrentChange(val) {
      this.paginationOption.pageNum = val
      getAjax(this)
    }
  }
}
