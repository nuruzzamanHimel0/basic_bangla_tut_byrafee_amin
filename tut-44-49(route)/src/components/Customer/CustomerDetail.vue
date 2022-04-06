<template>
    <div>
        <h3>Customer Detail Child componnet</h3>
        <h5>Customer Detail id : {{ customrDetailId }}  </h5>
        <hr>
        
         <!-- <router-link tag="button" 
         v-bind:to="'/customer/'+$route.params.id+'/edit'" 
         class="btn btn-danger" style="cursor:pointer;">Customer Edit</router-link> -->

         <router-link tag="button" 
        :to="{  name:'customerEdit' , params : {id: $route.params.id}, query:{ local: $route.params.id+'_en', que: $route.params.id+'_'+100 } }"
         class="btn btn-danger" style="cursor:pointer;">Customer Edit</router-link>

        
      
    </div>
</template>


<script>
export default {
    data(){
        return {
            customrDetailId: this.$route.params.id
        }
    }
   
   
}
</script>