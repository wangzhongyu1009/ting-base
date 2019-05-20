/**
 * 登陆页面私有方法
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  methods: {
    login () {
      console.log(this.loginForm)
      this.$router.push({ path: '/Example' })
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
    }
  }
}
