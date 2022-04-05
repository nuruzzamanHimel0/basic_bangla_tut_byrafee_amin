$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            src: "https://picsum.photos/id/237/200/300",
            alt: 'This is a dog',
            Grayscalesrc: 'https://picsum.photos/200/300?grayscale',
            Grayscalesrcalt: 'This is Grayscalesrc',
            googlelink: "https://www.google.com/",
            target: "_blank",
            mytext: 'Hellow himel',
            myHtml: "<strong>Hello Kamal</strong> ",
            username: "ludffy",
            userage: 21,
            allowage: 25,
            cars: ['totota', 'foads', 'bmw', 'suzuki'],
            namefor: {
                'name': "Himele",
                'country': "BD",
                'age' : 20
            }
            ,
            liforarray: ['aaaa','dddddd','fffffff','gggggggg','qqqqqqq'],
            
        },
        methods: {
            checkusername() {
                return this.username === 'ludffyy' ? true : false;
            },
            ageMatchFunction: function () {
                return this.userage === this.allowage ? true : false;
            }
        },
        
    });
    
  
    

});
