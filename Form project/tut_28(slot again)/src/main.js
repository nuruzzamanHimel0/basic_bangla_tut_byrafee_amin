import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'

// import 'jquery/dist/jquery.min.js'
// import 'popper.js/dist/popper.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
// create instance
export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
