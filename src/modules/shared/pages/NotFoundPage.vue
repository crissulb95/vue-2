<template>
  <div class="not-found-wrapper">
    <img src="/favicon.png" alt="" />
    <h2>The page you are looking for doesn't exists</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-wrapper {
  padding: 50px 100px;
}
.not-found-wrapper > img {
  max-height: 150px;
}
</style>
