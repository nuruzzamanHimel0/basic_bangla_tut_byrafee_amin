<template>
    <div>
        <p>Customer hchild componnet</p>
        <hr>

         <router-view></router-view>

        <hr>
        

        <p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p><p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit ea aspernatur quis mollitia quam possimus eveniet sapiente beatae assumenda ad iusto non, aperiam rerum. Fugit reiciendis laudantium consectetur error.
       </p>

    <button class="btn btn-success"  @click="navigateTOHome" >Go to Home</button>
        <hr>
       

    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    methods: {
        navigateTOHome(){
            this.$router.push('/');
        }
    }
}
</script>