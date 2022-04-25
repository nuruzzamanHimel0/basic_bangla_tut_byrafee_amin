<template>
    <div>
         <h1> {{ text }} </h1>
         <ul>
            <li v-for="cr in cars" :key="cr">
                {{ cr }}
            </li>
         </ul>
    </div>
</template>

<script>

import {carMixin} from './Mixin'

export default {
    data(){
        return {
            // text:'Client Section is here ......',
            // cars:['aaaa','bbbbbbb','cccccccc','aaaaaddddd'],
        }
    },
    mixins:[carMixin]
}
</script>