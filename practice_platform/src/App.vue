<template>
  <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Rouitng.....</h1>

          <compHeader></compHeader>

          <router-view></router-view>

        </div>
      </div>
  </div>
</template>

<script>
import compHeader from './components/Header.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    compHeader
  }
}
</script>

