<template>
  <div class="entry-selected fade-in">
    <div class="header">
      <span class="date">20-01-2022</span>
      <buttons />
    </div>
    <textarea class="body" placeholder="¿Qué ocurre hoy?" />
    <figure class="img-container">
      <img
        src="/mountain.jpg"
        alt="mountain default image"
        class="img-thumbnail"
      />
    </figure>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'EntrySelected',
  components: {
    Buttons: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "EntrySelectedButtons" */ '../components/EntrySelectedButtons'
      )
    )
  }
}
</script>

<style lang="scss">
.entry-selected {
  height: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 30px;
  flex-wrap: wrap;
  & > .header {
    display: flex;
    width: 100%;
    border-bottom: 2px solid #f7faef;
    padding-bottom: 10px;
    margin-bottom: 20px;
    align-items: center;
    & .date {
      flex: 1;
      font-size: 30px;
    }
  }
  & .body {
    font-size: 24px;
    resize: unset;
    background-color: transparent;
    color: #f7faef;
    height: calc(100% - 300px);
    border: 2px solid #f7faef;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    &:hover,
    &:active,
    &:focus {
      outline: none;
    }
  }
  & .img-container {
    position: relative;
    width: calc(100% - 100px);
    margin: 20px 0;
    height: 200px;
    > img {
      background-color: transparent !important;
      position: absolute;
      border: none;
      width: 100%;
      height: 100%;
      object-position: left;
      object-fit: contain;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
