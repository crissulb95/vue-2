<template>
  <div class="btn-container">
    <button class="btn btn-secondary">
      <i class="fa fa-upload"></i>
      Agregar imagen
    </button>
    <button class="btn btn-danger">
      <i class="fa fa-trash-alt"></i>
      Eliminar
    </button>
  </div>
</template>

<script>
export default {
  name: 'EntrySelectedButtons'
}
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  gap: 10px;
  & > .btn {
    color: white;
    &:hover {
      color: white;
    }
  }
}
</style>
