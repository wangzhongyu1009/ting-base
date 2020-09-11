/**
 * 登陆页面属性变量
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

export default {
  data () {
    return {
      loginForm: {
        userName: '',
        password: '',
        code: ''
      },
      resetPswForm: {
        userName: '',
        email: '',
        code: ''
      },
      verificationCode: '64Wv',
      modal: false,
      languageName: this.exchangName(this.getLocalData('lang'))
    }
  }
}
