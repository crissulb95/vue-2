<template>
  <section id="app-section">
    <!-- <figure class="img-container">
      <img alt="Vue logo" src="./assets/logo.png" />
    </figure> -->
    <navbar />
    <router-view />
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import(
        // LazyLoad tiene que ser asíncrono y ser utilizado dentro de la función de Vue
        /* webpackChunkName: "Navbar" */ './modules/shared/components/Navbar.vue'
      )
    )
  },
  name: 'App'
}
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
  background-image: url('https://www.transparenttextures.com/patterns/hixs-evolution.png');
  min-height: 100vh;
}
#app-section {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
  height: 100%;
}
#app-section > .img-container {
  flex: 0 0 100%;
  width: 100%;
  margin: 0;
}
</style>
