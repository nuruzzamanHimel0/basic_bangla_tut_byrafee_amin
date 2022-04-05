$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            title: 'Himel',
            isItTrue: true,
            cars: ['aa', 'bb'],
            robotObj: {
                name: "Franky",
                name1: "Frandddky",
            },
            greetingFunction: () => {
                return 'Hello world';
            }
        }
    });

    

});
