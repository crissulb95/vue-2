<template>
  <section class="daybook-layout">
    <home />
  </section>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'DayBookLayout',
  components: {
    Home: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Home" */ '../views/Home')
    )
  }
}
</script>

<style lang="scss" scoped>
.daybook-layout {
  width: 100vw;
  min-height: calc(100vh - 80px);
  padding: 40px 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
</style>
