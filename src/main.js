// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajaxFun from './MDKit/MDUtils/ajax/ajaxFun'
import 'sysStatic/css/base.scss'
import * as systemText from './MDKit/HEVMacros/textMacros'
import './MDKit/MDBasic/systemDirective'
import './MDKit/MDBasic/systemFilter'
import './MDKit/MDBasic/systemMethod'
import {
  Dialog,
  Pagination,
  Loading,
  MessageBox,
  Message,
  Notification,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Radio,
  RadioGroup,
  RadioButton,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Select,
  Form,
  FormItem,
  Input,
  Option,
  TimePicker,
  DatePicker,
  Table,
  TableColumn,
  Tree,
  Button
} from 'element-ui'

import TingUI from 'ting-ui'

Vue.use(TingUI)

Vue.use(Dialog).use(Pagination).use(Menu).use(Submenu).use(MenuItem)
Vue.use(MenuItemGroup).use(Row).use(Col).use(Radio).use(RadioGroup)
Vue.use(RadioButton).use(Container).use(Header).use(Aside).use(Main)
Vue.use(Footer).use(Select).use(Form).use(FormItem).use(Input)
Vue.use(Option).use(DatePicker).use(Table).use(TableColumn).use(Button)

Vue.use(Loading.directive)
Vue.use(TimePicker).use(DatePicker).use(Tree)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.prototype.$axios = ajaxFun

Vue.prototype.$systemText = systemText

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  ajaxFun,
  render: h => h(App)
}).$mount('#app')
