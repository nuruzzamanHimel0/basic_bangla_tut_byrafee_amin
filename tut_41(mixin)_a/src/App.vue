<template>
  <div class="container">
    
   
    <compClient></compClient>
    <compUser></compUser>

  </div>
  
</template>

<script>

import compClient from './Components/Client.vue'
import compUser from './Components/User.vue'

export default {
  data() {
    return {

      

    };
  },
  components:{
    compClient,
    compUser
  }
 
};
</script>

<style></style>
