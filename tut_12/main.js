$(document).ready(function(){
  
  
    var vu = new Vue({
        el: "#app",
        data: {
            name: 'kuddus',
            x: 0,
            y: 0,
            formData: {
                firstname: "",
                lastname: ""
            },
            newFormModl: {
                fatherName:"",
                motherName:""
            },
            friendNewForm:{
                firstFrndName:"",
                secFrndName:"",
            }
        },
        methods: {
            update(username , event) {
                this.name = username;
                console.log(event);
            },
            getCoord: function (event) {
                this.x = event.pageX;
                this.y = event.pageY;
            },
            submitForm: (event) => {
                event.preventDefault();
                alert('form submit');
            },
            submitFormOne: function () {
                alert('form submit');
                
            },
            formSubmit: function () {
                console.log(this.formData);
                alert('sdfd');
            },
            parentFormSubmit: function(){
                console.log(this.newFormModl);
         
                alert('Parent FOrm Submit');
            },
            friendFOrmFunction(event){
                event.preventDefault();
                console.log(this.friendNewForm);
            }



        },
       
       
        
    });
    

    

});
