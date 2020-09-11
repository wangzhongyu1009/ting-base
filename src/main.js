import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import iView from 'iview'

import TingUI from 'ting-ui'
Vue.use(TingUI)

import i18n from '@/WHKit/WHUtils/i18n'

import { getNetworkData, postNetworkData } from '@/WHKit/WHUtils/ajax/httpServer'
import * as systemText from './WHKit/HEVMacros/textMacros'
import global from './WHKit/HEVMacros/global'
import './WHKit/WHBasic/systemDirective'
import './WHKit/WHBasic/systemFilter'
import './WHKit/WHBasic/systemMethod'
import '@/assets/css/Base.scss'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$getNetworkData = getNetworkData
Vue.prototype.$postNetworkData = postNetworkData
Vue.prototype.$systemText = systemText
Vue.prototype.$GLOBAL = global

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
