<template>
  <div class="pokemon-about-page">
    <h2>About Page</h2>
    <counter />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import Counter from '../../../components/Counter.vue'
export default {
  name: 'AboutPage',
  components: {
    Counter: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Counter" */ '../components/counter')
    )
  }
}
</script>

<style></style>
