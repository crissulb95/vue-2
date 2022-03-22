<template>
  <div class="daybook-home-page container">
    <div class="row">
      <div class="col-4">
        <entry-list />
      </div>
      <div class="col">
        <entry-display />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'DaybookHomePage',
  components: {
    EntryList: defineAsyncComponent(() =>
      import(/* webpackChunkName: "EntryList" */ '../components/EntryList')
    ),
    EntryDisplay: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "EntryDisplay" */ '../components/EntryDisplay'
      )
    )
  }
}
</script>

<style lang="scss" scoped>
.daybook-home-page {
  width: 100%;
  flex: 1;
  position: relative;
  height: inherit;
}
</style>
