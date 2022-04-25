<template>
    <div>
        <h2>Header Component</h2>
        <p>{{ firstname}}</p>
        
        <button class="btn btn-success" @click="update">Change</button>
    </div>
</template>

<script>

import {bus} from '../../main.js'

export default {
  
    data(){
        return{

        }
    },
    
    props: {
       firstname: String,
      
    },
    methods:{
        update(){
          bus.$emit('changeName','MMMMD nuruzzamannn Himel');
          
          
        }
    },
}
</script>

<style scoped>
    h2{
        color:red;
    }
</style>