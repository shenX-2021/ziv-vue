import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {mobile} from '../packages/index';
const {Toast} = mobile;

Vue.mixin({
  methods: {
    $toast: Toast
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
