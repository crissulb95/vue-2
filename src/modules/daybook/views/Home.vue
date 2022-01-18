<template>
  <div class="daybook-home-page">
    <counter />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'DaybookHomePage',
  components: {
    Counter: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Counter" */ '../components/counter')
    )
  }
}
</script>

<style scoped>
.daybook-home-page {
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
