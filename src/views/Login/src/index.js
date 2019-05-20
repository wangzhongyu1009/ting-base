/**
 * 登陆页面生命周期钩子
 * Created By Wangzhongyu 2019-04-22
 * 如需修改联系zy.wang@muheda.com
 */

import DataMixins from './Data.mixins'
import NetWorkMixins from './network.mixins'
import Controller from './index.controller'
import { Form, FormItem, Input, Button, Modal } from 'iview'

export default {
  mixins: [DataMixins, NetWorkMixins, Controller],
  components: {
    Form,
    FormItem,
    Input,
    Button,
    Modal
  }
}
