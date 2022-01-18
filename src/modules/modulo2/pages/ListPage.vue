<template>
  <div class="pokemon-list-page">
    <h2>List Page</h2>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'ListPage'
}
</script>

<style scoped>
.pokemon-list-page {
  width: 100vw;
  min-height: calc(100vh - 80px);
  padding: 10px;
  position: relative;
}
</style>
