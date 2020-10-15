/**
 * 导航组件方法
 * Created By Wangzhongyu 2019-05-05
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  props: {
    isCollapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.activePath = this.$route.path.split('/')[2]
    }
  },
  data () {
    return {
      activePath: ''
    }
  },
  mounted () {
    this.activePath = this.$route.path.split('/')[2]
  },
  methods: {
    
  }
}
