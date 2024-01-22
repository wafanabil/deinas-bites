<template>
  <div class="container">

    <h1>/ CART</h1>
    <div class="flex">
      <div v-for="(product, index) in products" :key="index">
        <div class="img" :style="product.style"></div>
        <div class="content">
          <h4>{{ product.name }}</h4>
          <p> ${{ product.price }}</p>
        </div>
        <div>
          <ul class="counter">
            <li class="add" @click="add(product)">+</li>
            <li>{{ product.value }}</li>
            <li class="subtract" @click="subtract(product)">-</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    add(product) {
      this.$store.commit('add', product);
    },
    subtract(product) {
      this.$store.commit('subtract', product);
    },
  },
  computed: {
    products() {
      return this.$store.state.cart;
    },
  },
  mounted() {
    this.$store.dispatch('applyTotal');
  },
  updated() {
    this.$store.dispatch('applyTotal');
  }
}
</script>

<style scoped>
.container {
  background-color: #f3f3f5;
  padding: 40px 0;
  margin-bottom: 20px; 
}
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

.counter {
  display: flex;
  justify-content: center;
  list-style: none;
}

.counter li {
  padding: 5px;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter .add,
.counter .subtract {
  cursor: pointer;
}

h1 {
  font-weight: 100;
  font-size: 30px;
  padding: 25PX 0 30px;
}
</style>