<template>
    <div>
        <compHeader 
        :firstname="fname"
        
        @myEvent="fname = $event"
      
     
         ></compHeader>
         <hr><hr>
        <p>{{ name }}</p>
        <p>{{  age}}</p>
        <compFooter
            :lastName = "lname"
            @footerEvent = "lname = $event"
        ></compFooter>
    </div>
</template>

<script>

import compHeader from './Components/Header_footer/Header.vue'
import compFooter from './Components/Header_footer/Footer.vue'
export default {
    data(){
        return {
           name: "Md nuruzzaman himel",
           age: 29,
           fname:"Nuruzzaman",
           lname: "Himel",
           

        }
    },
    components:{
        compHeader,
        compFooter
    }
}
</script>

<style >
    
</style>