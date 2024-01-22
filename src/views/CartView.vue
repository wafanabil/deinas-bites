<template>
  <div class="cart">
    <CartApp></CartApp>
    <TotalApp></TotalApp>
  </div>
</template>

<script>
import CartApp from '@/components/CartApp.vue'
import TotalApp from '@/components/TotalApp.vue'
export default {
  components: {
    CartApp,
    TotalApp
  }
}
</script>

<style scoped>
*{
  text-align: center;
}


.cart h1 {
  font-weight: 100;
  font-size: 30px;
  padding: 0 0 30px;
}
</style>