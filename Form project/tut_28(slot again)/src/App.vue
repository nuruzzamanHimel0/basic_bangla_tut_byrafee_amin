<template>
    <div>
        <h2>I am a App.vue component</h2>
        <hr> <hr>

        <compListHelper> 

           

        </compListHelper>


    </div>
</template>

<script>

import compListHelper from './Components/ListHelper.vue'

export default {
    data(){
        return {
            lists: ['html','css','js','javascript'],
            load: ""
        }
    },
    components:{
        compListHelper
    },
    created(){
        setTimeout(()=>{
            this.load = "loading";
        },10000);
    }
}
</script>

<style>
    
</style>