<template>
  <li class="entry-item">
    <button @click="openEntry">
      <span class="date">{{ info.date }}</span>
      <h4 class="title">{{ info.title }}</h4>
      <p class="body">{{ info.body }}</p>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        title: '-',
        body: '-',
        date: '-'
      })
    }
  },
  methods: {
    openEntry() {
      this.$router.push({ path: '/daybook/1' })
    }
  }
}
</script>

<style lang="scss">
.entry-item {
  flex: 0 0 calc(100% - 20px);
  margin-bottom: 10px;
  width: 100%;
  & > button {
    background-color: transparent;
    color: white;
    border: 1px solid #f7faef;
    border-radius: 10px;
    padding: 10px 20px;
    display: block;
    width: 100%;
    transition: 0.4s all ease-in-out;
    text-align: left;
    &:hover {
      background-color: white;
      color: #22577a;
    }
    & .date {
      letter-spacing: 2px;
    }
    & > .title {
      font-weight: bold;
      letter-spacing: 2px;
    }
    & > .body {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
