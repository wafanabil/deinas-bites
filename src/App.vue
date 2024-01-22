<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <nav>
      <div>
        <router-link class="active" to="/">HOME</router-link>
        <router-link to="/about">SHOP</router-link>
        <router-link to="/about">ABOUT ME</router-link>
        <router-link to="/about">CONTACT</router-link>
      </div>
      <div>
        <router-link to="/about">INSTEGRAM</router-link>
        <router-link to="/about">YOUTUBE</router-link>
        <router-link to="/about">FACEBOOK</router-link>
      </div>
    </nav>
    
    <div class="cont"><router-view/></div>
    <FooterApp c></FooterApp>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500&family=Wix+Madefor+Text:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Source Serif 4', serif;
  font-family: 'Wix Madefor Text', sans-serif;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 85%;
  margin: auto; 
}

nav div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

nav div a {
  color: black;
  text-decoration: none;
}

nav div a.active {
  color: #edcde0;
}

nav div a:hover {
  color: #edcde0;
  transition: .3s;
}

.cont {
  width: 85%;
  margin: auto;
}
</style>
