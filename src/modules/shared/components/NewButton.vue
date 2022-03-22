<template>
  <button class="btn btn-success">
    <i :class="icon" class="fa-2x"></i>
  </button>
</template>

<script>
export default {
  name: 'NewButton',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'fas fa-plus'
    }
  }
}
</script>

<style scoped lang="scss">
button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #f7faef !important;
}
</style>
