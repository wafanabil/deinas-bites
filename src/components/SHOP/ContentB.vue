<template>
  <div class="container">

    <div class="flex">
      <div v-for="(product, index) in contentB" :key="index">
        <div class="img" :style="product.style"></div>
        <div class="content">
          <h4>{{ product.name }}</h4>
          <p> ${{ product.price }}</p>
        </div>
        <div><button @click="addToCart(product)">Add to cart</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters
 } from 'vuex';
export default {
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product)
    }
  },
  computed: {
    ...mapGetters(['contentB'])
  }
}
</script>

<style scoped>
.container .flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.container .flex .img {
  width: 310px;
  height: 310px;
  background-position: center center;
}
.container .flex .content {
  padding: 20px;
}

.container .flex .content h4{ 
 font-size: 15px;
 font-weight: 100; 
 margin-bottom: 10px;
}
.container .flex .content p {
  font-size: 15px;
  font-weight: 500;
}

.container .flex button {
  background-color: #573146;
  width: 100%;
  height: 35px;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
}
</style>