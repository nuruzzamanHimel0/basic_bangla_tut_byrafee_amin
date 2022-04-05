$(document).ready(function(){
    
    const temp = "<p> My name is {{ name }}</p>";
  
    var vu = new Vue({
        // el: "#app",
        data: {
           name: "md Nuruzzaman Himel"
        },
        methods: {
      
            
        },
        computed: {
        },
        // template: "<p> My name is {{ name }}</p>"
        template: temp 
       
    });

    setTimeout(() => {
        vu.$mount('#app');
    },2000);
    
    

    

});
