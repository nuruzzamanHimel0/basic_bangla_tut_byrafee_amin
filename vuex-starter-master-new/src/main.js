import Vue from 'vue'
import App from './App.vue'

import {store} from './Store/Store.js'

Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
