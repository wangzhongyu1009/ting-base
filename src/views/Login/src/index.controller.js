/**
 * 登陆页面私有方法
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      setLang: 'setLang'
    }),
    login () {
      console.log(this.loginForm)
      this.$router.push({ path: '/System/DropDown' })
    },
    changeCode () {
      console.log('获取验证码')
    },
    resetPassword () {
      this.$refs['oForm'].resetFields()
      this.modal = true
    },
    submit () {
      console.log(this.resetPswForm)
      this.modal = false
    },
    changeLang (item) {
      if (this.lang && item === this.lang) {
        return
      }
      this.languageName = this.exchangName(item)
      this.setLang(item).then(res => {
      })
    },
    exchangName (name) {
      return name === 'zhCN' ? '中文' : 'En'
    }
  }
}
