<template>
  <div class="background">
    <SlideMarkup></SlideMarkup>
    <BestSeller></BestSeller>
    <div class="hr"></div>
    <FollowBites></FollowBites>
    <OffeR></OffeR>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideMarkup from '@/components/Home/SlideMarkup.vue';
import BestSeller from '@/components/Home/BestSeller.vue';
import FollowBites from '@/components/Home/FollowBites.vue';
import OffeR from '@/components/Home/OffeR.vue';

export default {
  components: {
    SlideMarkup,
    BestSeller,
    FollowBites,
    OffeR,
  },
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
.hr {
  width: 85%;
  background-color: black;
  height: .5px;
  margin: 60px auto 30px;
  position: relative;
}

.hr::before {
  content: 'ALL COOKIES';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 10px 20px;
  font-weight: 100;
  font-size: 16px;
  transition: .6s;
}

.hr:hover::before {
  background-color: #edcde0;
  border-color: #edcde0;
}
</style>
