<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>
<style>
  .home-nav{
    background-color: var(--color-tint) ;
    color: #fff;
  }
</style>