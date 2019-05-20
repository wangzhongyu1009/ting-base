import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import iView from 'iview'

import TingUI from 'ting-ui'
Vue.use(TingUI)

import i18n from '@/WHKit/WHUtils/locale'

import ajaxConfig from '@/WHKit/WHUtils/ajax/ajaxConfig'
import * as systemText from './WHKit/HEVMacros/textMacros'
import './WHKit/WHBasic/systemDirective'
import './WHKit/WHBasic/systemFilter'
import './WHKit/WHBasic/systemMethod'
import '@/assets/css/Base.scss'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$axios = ajaxConfig
Vue.prototype.$systemText = systemText

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  ajaxConfig,
  i18n,
  render: h => h(App)
}).$mount('#app')
