import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'JAM & POPPY SEED BITES',
        price: 1.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_607635e027c14f0f9f4e3282ba1ccdcc~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_607635e027c14f0f9f4e3282ba1ccdcc~mv2.png")'
        }
      },
      {
        name: 'POPPY SEED BITES',
        price: 2.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_485506e6d037450bbd97184529dc4896~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_485506e6d037450bbd97184529dc4896~mv2.png")'
        }
      },
      {
        name: 'OATMEAL BITES',
        price: 2.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_11c55770394e448ab875cf13a837d2b7~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_11c55770394e448ab875cf13a837d2b7~mv2.png")'
        }
      },
      {
        name: 'SOFT BUTTER COOKIES',
        price: 2.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_931c747aa6584df6b3a4a00665e68389~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_931c747aa6584df6b3a4a00665e68389~mv2.png")'
        }
      },
      {
        name: 'PARMESAN BITES',
        price: 1.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_cadf915fa7144f178cd6bb416a35b2c6~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_cadf915fa7144f178cd6bb416a35b2c6~mv2.png")'
        }
      },
      {
        name: 'WHITE CHOOCOLATE BITES',
        price: 1.00,
        value: 1,
        type: 'A',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_57c6ecfb7a474d7c8b6a2abe557e256d~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_57c6ecfb7a474d7c8b6a2abe557e256d~mv2.png")'
        }
      },
      {
        name: 'JAM BITES',
        price: 1.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_ca9c6c81ee3c4b109bc80039c02dd711~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_ca9c6c81ee3c4b109bc80039c02dd711~mv2.png")'
        }
      },
      {
        name: 'CHOOCOLATE CHIPS',
        price: 2.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_882771ceb591478ab525da0d56e457e4~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_882771ceb591478ab525da0d56e457e4~mv2.png")'
        }
      },
      {
        name: 'NUTS & CARAMEL BITES',
        price: 2.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_9e3cbb2440934ceea2e6ef037da64d40~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_9e3cbb2440934ceea2e6ef037da64d40~mv2.png")'
        }
      },
      {
        name: 'BUTTER COOKIES',
        price: 1.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_42eb031701d04527a103d2f4e49e1b5d~mv2.png/v1/fill/w_388,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_42eb031701d04527a103d2f4e49e1b5d~mv2.png")'
        }
      },
      {
        name: 'PECAN NUT BITES',
        price: 2.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_8c8f73f4261e4502bb789bca0d946abd~mv2.jpg/v1/fill/w_388,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_8c8f73f4261e4502bb789bca0d946abd~mv2.jpg")'
        }
      },
      {
        name: 'SEED BITES',
        price: 2.00,
        value: 1,
        type: 'B',
        style: {
          'background-image': 'url("https://static.wixstatic.com/media/f61af8_4117f239d6bb4ed7a8297d0c393d3f7b~mv2.jpg/v1/fill/w_388,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_4117f239d6bb4ed7a8297d0c393d3f7b~mv2.jpg")'
        }
      },
    ],
    cart: [],
    subTotal: 0,
    total: 0,
    discount: 0,
    count: 0
  },
  getters: {
    contentA: state => {
      const filteredProducts = state.products.filter((product) => product.type === 'A');
      return filteredProducts;
    },
    contentB: state => {
      const filteredProducts = state.products.filter((product) => product.type === 'B');
      return filteredProducts;
    }
  },
  mutations: {
    addToCart: (state, product) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].name == product.name) {
          state.cart[i].value++;
          state.subTotal += product.price;
          return;
        }
      }
      state.cart.push({
        name: product.name,
        price: product.price,
        value: product.value,
        style: product.style
      });
      state.subTotal += product.price;
    },
    add: (state, product) => {
      state.cart.forEach(pr => {
        if (pr.name == product.name) {
          pr.value++;
          state.subTotal += product.price;
        }
      })
    },
    subtract: (state, product) => {
      state.cart.forEach(pr => {
        if (pr.name == product.name) {
          pr.value--;
          state.subTotal -= product.price;
        }
      })
    },
    Applay: (state) => {
      if (state.count == 0) {
        state.discount = (state.total * .10)
        state.total = state.total - (state.total * .10)
        state.count++
      }
    },
    Remove: (state) => {
      if(state.count == 1) {
        state.total = state.total + (state.discount)
        state.count--;
      }
    },
    changeTotal: (state) => {
      state.total = 0;
      state.total = 0 + (state.subTotal + (state.subTotal * .15));
    },
  },
  actions: {
    applyTotal: ({ commit }) => {
      commit('changeTotal');
    },
  },
  modules: {
  }
})
