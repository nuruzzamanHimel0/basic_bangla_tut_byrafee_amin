<template>
    <div>
        <h2>Footer Component</h2>
        <p>{{ lastName }}</p>
        
    </div>
</template>

<script>
import {bus} from '../../main.js'

export default {
    data(){
        return{

        }
    },
    props:{
      lastName: String
    },
    created(){
        bus.$on('changeName',(data)=>{
            this.$emit('footerEvent',data);
            // this.lastName = data;
        });
    }
}
</script>


<style scoped>
    h2{
        color:green;
    }
</style>