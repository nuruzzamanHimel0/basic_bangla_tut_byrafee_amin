$(document).ready(function(){
    
   
    var vu = new Vue({
        el: "#app",
        data: {
            name: "Md Nuruzzaman Himel"
        },methods: {
            updatefunction() {
                return this.name = "MDDDDDDDDD . Nuruzzaman himel";
            }, destroyFunction() {
                this.$destroy();
            }
        },
         beforeCreate() {
            console.log('beforeCreate');
        },created() {
            console.log('created');
        },beforeMount() {
            console.log('beforeMount');
        },mounted() {
            console.log('mounted');
        },beforeUpdate() {
            console.log('beforeUpdate');
        },updated() {
             console.log('updated');
        },beforeDestroy() {
             console.log('beforeDestroy');
        },
         destroyed() {
             console.log('destroyed');
         },
        
    });

   

  
    

    

});
