$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            a: 0,
            b: 0,
            salary:10,
        },
        methods: {
            // sumOfA(){
            //     console.log('add A');
            //     return this.salary + this.a;
            // },
            // sumOfB(){
            //     console.log('add B');
            //     return this.salary + this.b;
            // }
        },
        computed:{
            sumOfA(){
                console.log('add A');
                return this.salary + this.a;
            },
            sumOfB(){
                console.log('add B');
                return this.salary + this.b;
            }
        }
        
       
    });

    
    

    

});
