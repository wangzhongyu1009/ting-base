import Vue from "vue";

// 获取本地存储数据
Vue.prototype.getLocalData = function (key) {
  return typeof(localStorage.getItem(key)) === 'string' ? localStorage.getItem(key) : JSON.parse(localStorage.getItem(key))
}

// 保存数据至本地
Vue.prototype.setLocalData = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
