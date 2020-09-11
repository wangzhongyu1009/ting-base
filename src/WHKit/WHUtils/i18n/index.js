// 国际化设置
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../locale'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // 当前语言环境
  locale: window.localStorage.getItem('lang') || 'zhCN',
  // 默认语言环境。如果locale中无匹配项则采用该项值
  fallbackLocale: window.localStorage.getItem('lang') || 'zhCN',
  messages: messages
})

export default i18n