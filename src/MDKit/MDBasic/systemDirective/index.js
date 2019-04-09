import Vue from "vue";

// 文本框自动聚焦
Vue.directive('focus', {
  inserted: function (el) {
    let trueNode = el.getElementsByTagName('input')[0]
    trueNode.focus()
  }
})
