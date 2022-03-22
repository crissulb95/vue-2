<template>
  <div class="entry-display-container">
    <router-view />
    <new-button :icon="correctIcon" />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'EntryDisplay',
  components: {
    NewButton: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "NewButton" */ '../../shared/components/NewButton.vue'
      )
    )
  },
  computed: {
    correctIcon() {
      if (this.$route.name === 'entry') return 'far fa-save'
      return 'fas fa-plus'
    }
  }
}
</script>

<style lang="scss">
.entry-display-container {
  border: 2px solid #f7faef;
  border-radius: 5px;
  height: 100%;
  position: relative;
}
</style>
