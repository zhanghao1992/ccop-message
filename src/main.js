// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
// import './assets/css/reset.css'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './axios/index'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store/store'
import 'jquery'
// global filter
import * as filters from './filters'

Vue.use(Element, {size: 'medium'})
Vue.use(VueAxios, axios)
Vue.use(Vuex)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 用于取消 Vue 所有的日志与警告
// Vue.config.silent = true

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
