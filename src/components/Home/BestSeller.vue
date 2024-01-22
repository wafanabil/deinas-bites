<template>
  <div>
    <h1>/ BEST SELLERS</h1>
    <p>I'm a paragraph. Click here to add your own text and edit me.</p>

    <div class="best-sellers">
      <section v-for="(best, index) in bests" :key="index">
        <a href="">
          <div class="image" :style="best.style"></div>
          <div>
            <h3>{{ best.name }}</h3>
            <SPan>{{ best.prise }}</SPan>
          </div>
        </a>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      bests: [
        {
          name: 'JAM & POPPY SEED BITES',
          prise: '$1.00',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.png/v1/fill/w_410,h_446,al_c,q_90,usm_0.66_1.00_0.01/f61af8_353b9c005467422b80eefb54a30d80d4~mv2.webp")',
          }
        },
        {
          name: 'OATMEAL BITES',
          prise: '$2.00',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/f61af8_c622ee508f0e4b12ad92bce8daf7d5d3~mv2.png/v1/fill/w_406,h_446,al_c,q_90,usm_0.66_1.00_0.01/f61af8_c622ee508f0e4b12ad92bce8daf7d5d3~mv2.webp")',
          }
        },
        {
          name: 'WHITE CHOCOLATE BITES',
          prise: '$1.00',
          style: {
            'background-image': 'url("https://static.wixstatic.com/media/f61af8_16af665135c44689825e77f8bcc68492~mv2.png/v1/fill/w_406,h_448,al_c,q_90,usm_0.66_1.00_0.01/f61af8_16af665135c44689825e77f8bcc68492~mv2.webp")',
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
h1 {
  font-weight: 100;
  font-size: 30px;
  margin: 30px 0;
}

p,
div .best-sellers section a h3 {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 30px;
}

div .best-sellers {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 40px;
}

div .best-sellers section {
  width: 328px;
  height: 451px;
}

div .best-sellers section a {
  text-decoration: none;
  color: black;
  display: block;
  height: 100%;
}

div .best-sellers section a h3 {
  margin: 20px;
}


div .best-sellers section a span {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 30px;
}

.image {
  height: 350px;
  background-position: center center;
}
</style>