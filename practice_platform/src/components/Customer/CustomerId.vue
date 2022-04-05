<template>
    <div>
        <p>Customer User Id componnet</p>
        <hr>
        <h4>Route id:  {{ routeId }} </h4>
        <hr>
        <button class="btn btn-success"  @click="navigateTOHome" >Go to Home</button>

    </div>
</template>

<script>
export default {
    data(){
        return {
            routeId : this.$route.params.id
        }
    },
    watch:{
        '$route'(to){
            this.routeId = to.params.id
        }
    },
    methods: {
        navigateTOHome(){
            this.$router.push('/');
        }
    }
}
</script>