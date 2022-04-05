$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            a: 0,
            link: 'https://www.google.com/',
            name:"",
        },
        methods: {
      
            
        },
        computed: {
          

        }
       
    });

     var exp11 = new Vue({
        el: "#exp1",
        data: {
           expone: 10
        },
        methods: {
            changeInstanceTwo: function () {
                exp22.exptwo = 'chnagedddd';
            }
        },
        computed: {
          

        }
       
     });
    
    var exp22 = new Vue({
        el: "#exp2",
        data: {
           exptwo : 100
        },
        methods: {
         
        },
        computed: {
          

        }
       
    });
    
    

    

});
