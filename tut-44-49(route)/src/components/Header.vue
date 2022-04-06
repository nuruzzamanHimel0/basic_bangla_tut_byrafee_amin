<template>
    <div>
        <ul class="nav justify-content-center bg-primary">
        
            <router-link active-class="active" exact style="cursor: pointer;" tag="li" class="nav-item nav-link text-white" to="/">Home</router-link>

            <router-link active-class="active" exact style="cursor: pointer;" tag="li" class="nav-item nav-link text-white" to="/customerid/1">Customer User 1</router-link>

            <router-link active-class="active" exact style="cursor: pointer;" tag="li" class="nav-item nav-link text-white" to="/customerid/2">Customer User 2</router-link>

            <router-link active-class="active" exact style="cursor: pointer;" tag="li" class="nav-item nav-link text-white" to="/customer">Customer </router-link>

            <router-link  style="cursor: pointer;" tag="li" class="nav-item nav-link text-white" to="/dfdasdf">Redirect Errors </router-link>

      
        </ul>
    </div>
</template>

<style scoped>
    ul .nav-item{
        color:white;
    }
     ul .nav-item.active{
         color:red !important;
     }
</style>