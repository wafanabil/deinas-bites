<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div class="warp">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem class="slideritem" v-for="(item, index) in someList" :key="index" :style="item.style">
        
        <p>100% NATURAL.</p>
        <p>HOMEMADE</p>
        <p>FRESH COOKIES.</p>
        <button>SHOP NOW</button>
        
      </slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data() {
    return {
      //data list [array]
      someList: [
        {
          html: 'slide1',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/84770f_e659a0b8c7eb41ff80373996f9a7638f~mv2.jpg/v1/fit/w_879,h_510,q_90/84770f_e659a0b8c7eb41ff80373996f9a7638f~mv2.webp")',
            'background-size': 'cover',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
          }
        },
        {
          html: 'slide2',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/84770f_d171f69003de4ad3aa1f09d0143444a1~mv2.jpg/v1/fit/w_710,h_510,q_90/84770f_d171f69003de4ad3aa1f09d0143444a1~mv2.webp")',
            'background-size': 'cover',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
          }
        },
        {
          html: 'slide3',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/84770f_d7589dc2089e46a29a32cc6e372e02d1~mv2.jpg/v1/fit/w_710,h_510,q_90/84770f_d7589dc2089e46a29a32cc6e372e02d1~mv2.webp")',
            'background-size': 'cover',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
          }
        }
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>

<style scoped>
.warp {
  width:100%;
  margin:20px auto;
  height:700px;
}

.warp .slideritem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding-left: 130px;
  gap: 15px;
}

.warp .slideritem p {
  font-family: 'Source Serif 4', serif;
  color: white;
  font-size: 60px;
  font-weight: 500;
}

.warp .slideritem p:not(:first-of-type) {
  font-weight: 300;
}

.warp .slideritem button {
  border: none;
  background: white;
  padding: 10px 15px;
  margin-top: 60px;
}

.warp .slideritem button:hover {
  opacity: .6;
}
</style>