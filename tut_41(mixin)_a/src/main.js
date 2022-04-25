import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// global filter 

Vue.filter('removeText', ($v)=>{
  return $v.slice(1, 6);
});

Vue.filter('toRemoveName', ($v) => {
  return $v.slice(5);
});


new Vue({
  render: h => h(App),
}).$mount('#app')
