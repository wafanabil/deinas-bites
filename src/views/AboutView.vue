<template>
  <div class="about">
    <h1>/ PICK YOUR COOKIES</h1>
    <div>
      <button class="active" @click="componentId = 'AllContent'">AllContent</button>
      <button @click="componentId = 'ContentA'">A</button>
      <button @click="componentId = 'ContentB'">B</button>
      <component :is="componentId"></component>
    </div>

    <!-- <AllContent></AllContent> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AllContent from '@/components/SHOP/AllContent.vue';
import ContentA from '@/components/SHOP/ContentA.vue';
import ContentB from '@/components/SHOP/ContentB.vue';


export default {
  components: {
    AllContent,
    ContentA,
    ContentB
  },
  data() {
    return {
      componentId: AllContent,
    }
  },
    methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
}
</script>

<style scoped>
* {
  text-align: center;
}

.about {
  background-color: #f3f3f5;
  padding: 40px 0;
  margin-bottom: 20px; 
}

.about h1 {
  font-weight: 100;
  font-size: 30px;
  padding: 0 0 30px;
}

.about .container {
  width: 80%;
  margin: auto;
}

.about button {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  margin: 10px 10px 50px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
}

.about button.active {
  background-color: #edcde0;
  color: white;
}
</style>
