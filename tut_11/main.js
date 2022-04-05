$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
          name: 'kuddus'
        },
        methods: {
            update() {
                setTimeout( ()=> {
                    this.name = 'himel';
                },3000);
            }
        },
       
        
    });

    
    var vu = new Vue({
        el: "#app1",
        data: {
          country: 'Bangladesh'
        },
        methods: {
            countryMethod: function () {
                setTimeout(() => {
                    this.country = "United state of Amirica";
                },3000 );
            }
        }
           
       
        
    });
    

    

});
