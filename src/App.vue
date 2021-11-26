<template>
  <!-- <figure class="img-container">
    <img alt="Vue logo" src="./assets/logo.png" />
  </figure> -->
  <counter title="Entran" />
  <counter title="Salen" />
  <indecision />
</template>

<script>
import Counter from "./components/Counter.vue";
import Indecision from "./components/Indecision.vue";
export default {
  name: "App",
  components: {
    Counter,
    Indecision,
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
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: relative;
}
#app > .img-container {
  flex: 0 0 100%;
  width: 100%;
  margin: 0;
}
</style>
