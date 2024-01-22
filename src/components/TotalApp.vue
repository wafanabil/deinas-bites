<template>
  <div class="container">
    <div class="total">
      <h1>/ TOTAL</h1>

      <div class="flex">
        <div class="left">
          <div>
            <P>SubTotal: </P>
            <p>${{ subTotal }}</p>
          </div>
          <hr>
          <div>
            <p>Tax 15%: </p>
            <p> ${{ (subTotal * .15).toFixed(2) }}</p>
          </div>
          <hr>
          <div>
            <p>total: </p>
            <p>${{ total.toFixed(2) }}</p>
          </div>

        </div>

        <div class="right">
          <label for="">DISCOUNT/ PROMO CODE</label>
          <input type="text" v-model="discount">
          <div>
            <button @click="Applay">Applay</button>
            <button style="margin-left: 10px;" @click="Remove">Remove</button>
          </div>
          <p style="color: brown; margin-top: 6px;">Use discount code {wafaa} for 10% discount</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discount: ''
    }
  },
  methods: {
    Applay() {
      this.$store.commit('Applay')
    },
    Remove() {
      this.$store.commit('Remove')
    }
  },
  computed: {
    subTotal() {
      return this.$store.state.subTotal
    },
    total() {
      return this.$store.state.total
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #f3f3f5;
  padding: 40px 0;
  margin-bottom: 30px;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  font-size: 18px;
  gap: 50px;
}

.flex .left {
  width: 50%;
  height: 118px;
}

.flex .left div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.flex .left hr {
  margin: 10px 0;
}

.flex .right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 118px;
}

.flex .right input {
  width: 50%;
  margin: 6px 0;
  padding: 4px;
  border-radius: 5px;
  border: 1px solid black;
}

.flex .right input:focus {
  outline-color: #edcde0;
  outline-style: solid;
  outline-width: 2px;
  border: none;
}

.flex .right button {
  width: fit-content;
  padding: 6px 10px;
  font-size: 18px;
  background-color: white;
  border: none;
  font-weight: 300;
}


h1 {
  font-weight: 100;
  font-size: 30px;
  padding: 0 0 30px;
}
</style>