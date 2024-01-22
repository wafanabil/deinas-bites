<template>
  <header>

    <p><a href="">Deina's Bites</a></p>

    <div class="left-side">
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="SEARCH...">
      </div>
      <div class="log-in">
        <p><a href="#">Sign In</a></p>
        <p><a href="#">Log In</a></p>
      </div>
      <router-link class="active" to="/cart"><i class="fa-solid fa-cart-arrow-down"></i></router-link>
    </div>

  </header>
</template>

<style scoped>
header {
  background: #fbf2f7;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  font-family: 'Source Serif 4', serif;
  text-decoration: none;
  font-size: 25px;
  color: black;
}

.left-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.left-side .search {
  background: white;
  padding: 5px;
  border: 1px solid black;
}

.left-side .search input {
  background-color: transparent;
  border: none;
  padding: 5px;
}

.left-side .search input:focus {
  outline: none;
}

.left-side .log-in {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.left-side .log-in a {
  font-size: 20px;
  color: black;
}

.left-side .log-in p:last-of-type {
  background-color: white;
  padding: 5px 20px;
  border-radius: 30px;
  border: 1px solid black;
}

.left-side i {
  font-size: 25px;
}
</style>