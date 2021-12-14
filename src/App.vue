<template>
  <!-- <figure class="img-container">
    <img alt="Vue logo" src="./assets/logo.png" />
  </figure> -->
  <pokemon-page />
</template>

<script>
import PokemonPage from "./pages/PokemonPage.vue";
import "driver.js/dist/driver.min.css";

export default {
  name: "App",
  components: {
    PokemonPage,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  align-items: flex-start;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: relative;
  background-image: url("https://www.transparenttextures.com/patterns/hixs-evolution.png");
}
#app > .img-container {
  flex: 0 0 100%;
  width: 100%;
  margin: 0;
}
</style>
