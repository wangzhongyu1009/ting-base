/**
 * 导航组件方法
 * Created By Wangzhongyu 2019-05-05
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  props: {
    
  },
  data () {
    return {
      activePath: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.activePath = this.$route.path.split('/')[1]
    }
  },
  mounted () {
    this.activePath = this.$route.path.split('/')[1]
  },
  methods: {
    
  }
}
