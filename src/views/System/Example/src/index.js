/**
 * 用户管理页面生命周期钩子
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

import DataMixins from './Data.mixins'
import NetWorkMixins from './network.mixins'
import Controller from './index.controller'
import IndexConfig from './index.config'
import CateNav from '@/components/CateNav'
import TTable from '@/components/Table'
import Toolbar from '@/components/ToolBar'

export default {
  mixins: [DataMixins, NetWorkMixins, Controller],
  components: {
    CateNav,
    TTable,
    Toolbar
  },
  computed: {
    toolBarList () {
      return IndexConfig.toolBarList
    }
  },
  beforeCreate () {

  },

  created () {

  },

  beforeMount () {

  },

  mounted () {
    
  },

  beforeDestroy () {

  },

  destroyed () {

  }
}
