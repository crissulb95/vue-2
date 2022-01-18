<template>
  <div class="pokemon-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PokemonLayout'
}
</script>

<style scoped>
.pokemon-layout {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.pokemon-layout h2 {
  flex: 0 0 100%;
}
</style>
