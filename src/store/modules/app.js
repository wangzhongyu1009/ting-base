import i18n from '@/WHKit/WHUtils/i18n'
const app = {
  state: {
    lang: '',
    theme: ''
  },
  mutations: {
    // 设置语言
    SET_LANG: (state, lang) => {
      state.lang = lang
      window.localStorage.setItem('lang', lang)
    },
    // 设置主题
    SET_TTEME: (state, theme) => {
      state.theme = theme
      window.localStorage.setItem('local_theme', theme)
    }
  },
  actions: {
    // 设置语言
    setLang ({ commit }, lang) {
      import(`@/WHKit/WHUtils/locale/lang/${lang}`).then(msgs => {
        let _msg = msgs.default
        i18n.setLocaleMessage(_msg)
        i18n.locale = lang
        commit('SET_LANG', lang)
      })
      return Promise.resolve(lang)
    },
    // 设置主题
    setTheme ({ commit }, theme) {
      commit('SET_TTEME', theme)
      return Promise.resolve(theme)
    }
  }
}
export default app
