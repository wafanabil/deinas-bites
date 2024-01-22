<template>
  <div class="content">
    <div class="container">
      <div class="titel">
        <h1>/ FOLLOW ME FOR MORE BITES</h1>
      </div>

      <div class="section">

        <div class="flex">
          <div class="img" v-for="(list, index) in lists" :key="index" :style="list.style">
          </div>
        </div>

        <div class="button">
          <button>Lode More</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/01.jpg")'
          }
        },
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/02.jpg")'
          }
        },
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/03.jpg")'
          }
        },
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/04.jpg")'
          }
        },
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/05.jpg")'
          }
        },
        {
          style: {
            'background-image': 'url("https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Homemade%20Cookie%20Store/06.jpg")'
          }
        },
      ]
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.content .container {
  position: relative;
}

.content .titel {
  position: relative;
}

.content .titel::before {
  content: "";
  position: absolute;
  height: 408px;
  width: 100%;
  background-color: #f3f3f5;
  left: 0;
  top: 0;
}

.content .titel h1 {
  font-weight: 100;
  font-size: 30px;
  padding: 50px;
  position: relative;
  z-index: 0;
}

.content .section {
  max-width: 980px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.content .section .flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.content .section .flex .img {
  width: 320px;
  height: 320px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.content .container .button button {
  font-family: 'Source Serif 4', serif;
  background-color: white;
  border: 1px solid black;
  padding: 10px 40px;
  font-weight: 300;
  font-size: 17px;
  transition: .6s;
  margin: 70px;
}

.content .container .button:hover button {
  background-color: #edcde0;
  border-color: #edcde0;
}
</style>