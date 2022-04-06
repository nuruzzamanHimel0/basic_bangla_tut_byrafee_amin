<template>
    <div id="app">
        <compBookListOne ></compBookListOne>
        <compBookListTwo ></compBookListTwo>

        <button class="btn btn-success"  @click="reducePrice" >Reduce Price</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
    data(){
        return{
            
        }
    },
    components:{
      compBookListOne,
      compBookListTwo
    },
    methods:{
        ...mapActions([
            'reducePrice'
        ])
        // reducePrice(){
        //     console.log('cliek');
        //     this.$store.dispatch('reducePrice');
        // }
    }
}
</script>
