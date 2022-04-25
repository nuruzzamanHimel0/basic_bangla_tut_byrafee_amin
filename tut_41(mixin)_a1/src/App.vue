<template>
    <div class="container">
        <h3> Mixin Again</h3> <br>

        <ul>
            <li v-for="(value,key) in lists" :key="key" >
                {{ value }}
            </li>
        </ul>

        <p> {{ name }} </p>
       
       
    </div>
</template>

<script>
import { myMixins } from './mixin.js'

export default {
        data(){
            return {
                lists: ['AAAA','BBBBB','Content','Info']
            }
        },
        mixins: [myMixins],
        created() {
        this.showName();
    },
    methods: {
        showName(){
            this.name = "Nuruzzaman TOmla"
        }
    },
}
</script>

<style scoped>
    
</style>