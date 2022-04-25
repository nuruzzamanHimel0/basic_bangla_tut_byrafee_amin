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
export default {
    data(){
        return {
            text:'User Section is here ......',
            cars:['aaaa','bbbbbbb','cccccccc','aaaaaddddd'],
        }
    }
}
</script>