$(document).ready(function(){
    
    const temp = "<p> My name is {{ name }}</p>";
  
    Vue.component('button-counter', {
        data: function () {
            return {
            count: 0
            }
        },
        template: '<button v-on:click="count++" >  your click {{ count }} times </button>'

    });
    var vu = new Vue({
    //    el:"#app"
    });

    setTimeout(() => {
        vu.$mount("#app");
    },3000);

  
    

    

});
