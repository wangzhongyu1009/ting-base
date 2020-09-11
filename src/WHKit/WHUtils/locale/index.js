import iviewZhLocale from 'iview/src/locale/lang/zh-CN';
import iviewEnLocale from 'iview/src/locale/lang/en-US';
import enLocale from './lang/en'
import zhLocale from './lang/zhCN'
const messages = {
  en: {
    ...enLocale,
    ...iviewEnLocale
  },
  zhCN: {
    ...zhLocale,
    ...iviewZhLocale
  }
}

export default messages
