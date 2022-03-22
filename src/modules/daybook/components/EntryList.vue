<template>
  <aside class="entry-list-container">
    <h2>Entradas</h2>
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>
    <ul class="entry-scrollarea" v-if="entries">
      <entry v-for="item in entries" :key="item.id" :info="item" />
    </ul>
  </aside>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'EntryList',
  components: {
    Entry: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Entry" */ '../components/Entry')
    )
  },
  computed: {
    entries() {
      return this.$store.getters['daybook/entries']
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  height: calc(100vh - 175px);
  text-align: left;
  border-right: 2px solid #f7faef;
  padding-right: 10px;
  & > h2 {
    border-bottom: 2px solid #f7faef;
  }
  .entry-scrollarea {
    border-radius: 10px;
    border: 1px solid #f7faef;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 300px);
    justify-content: center;
    list-style: none;
    margin: 20px 10px;
    overflow: auto;
    padding-left: 0;
    padding: 10px 0;
    align-content: flex-start;
  }
}
</style>
