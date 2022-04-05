$(document).ready(function(){
  
//   ######## Tutorials 4 ####
    
    var vu = new Vue({
        el: '#app',
        data: {
            title: 'this is title',
            isBool: true,
            cars: ['aaa', 'bbbb'],
            myobj : {
                obj1 : 'this is a first obj',
                obj2 : 'this is a sec obj',
            },
            myFunction: () => {
                return "This is my function return";
            }
         }
    })
    

    

});
