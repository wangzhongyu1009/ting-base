import Vue from "vue";

// 数字千分位
Vue.filter('IntegerToThousands', function (num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
})
