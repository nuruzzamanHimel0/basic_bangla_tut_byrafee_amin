$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            title: 'Himel htitle is hreeeee',
            isItTrue: true,
            cars: ['aa', 'bb'],
            robotObj: {
                name: "Franky",
                name1: "Frandddky",
            },
            greetingFunction: () => {
                return 'Hello world';
            }
        },
        methods: {
            methodsOne: function () {
                return " hello methodsOne";
            },
            methodsTwo() {
                return "hellow methodsTwo";
            },
            titlemethod() {
                return this.title;
            },
            myFunction1: () => {
                return 'This is my  myFunction1 method';
            },
            myFunction2: function () {
                return "this is myFunction2 here";
            },
            myFunction3() {
                return "this is myFunction33 hreee";
            },
            titleFunction: function () {
                return this.title;
            }
            
        }
    });
    

    

});
