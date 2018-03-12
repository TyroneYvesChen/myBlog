// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import httpServer from './assets/js/api/api'
import * as filters from './assets/js/filters';
import resize from './assets/js/resize';


Vue.prototype.$http = httpServer

Vue.config.productionTip = true

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
