import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import app from '@/store/modules/app'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})
export default store
