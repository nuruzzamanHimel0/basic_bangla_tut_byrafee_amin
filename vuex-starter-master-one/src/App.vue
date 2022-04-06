<template>
    <div id="app">
        <compBookListOne ></compBookListOne>
        <compBookListTwo ></compBookListTwo>
        <button class="btn btn-secondary" @click="reducePriceFunction">Reduce Price</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
   
    components:{
      compBookListOne,
      compBookListTwo
    },
    methods:{

         ...mapActions({
        add: 'reducePriceFunction' // map `this.add()` to `this.$store.dispatch('increment')`
        })
        // reducePriceFunction(){
        //     this.$store.dispatch('reducePriceAction');
        // }
    }
}
</script>
