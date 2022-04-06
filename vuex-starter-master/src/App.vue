<template>
    <div id="app">
        <compBookListOne ></compBookListOne>
        <compBookListTwo ></compBookListTwo>
        <button class="btn btn-secondary" @click="reducePriceFunction">Reduce Price</button>
    </div>
</template>

<script>

import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
   
    components:{
      compBookListOne,
      compBookListTwo
    },
    methods:{
        reducePriceFunction(){
            // this.$store.commit('reducePrice');
            this.$store.dispatch('reducePriceAction');
        }
    }
}
</script>
