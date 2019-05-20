import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customZhCn from './lang/zh-CN'
import customEnUs from './lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
let lang = window.localStorage.getItem('lang') || 'zh-CN'

Vue.config.lang = lang

Vue.locale = () => {}
const messages = {
  'zh-CN': customZhCn,
  'en-US': customEnUs
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
