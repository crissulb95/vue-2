<template>
  <div class="counter-container">
    <h3>Counter Component for VUEX</h3>
    <!-- <p><strong>Computed Count:</strong> {{ computedCount }}</p> -->
    <p><strong>mapState Count:</strong> {{ count }}</p>
    <p><strong>mapState LastMutation:</strong> {{ lastMutation }}</p>
    <p><strong>Square Count:</strong> {{ squareCount }}</p>
    <div class="btn-container">
      <button class="btn btn-primary" @click="increment">+1</button>
      <button class="btn btn-secondary" @click="incrementBy5">+5</button>
      <button class="btn btn-danger" @click="randomNumber">Random</button>
      <button
        class="btn btn-warning"
        @click="addRandomInt"
        :disabled="isLoading"
      >
        Add random
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Counter',
  computed: {
    // computedCount() {
    //   return this.$store.state.count
    // },
    ...mapState('pokemon', ['count', 'lastMutation', 'isLoading']),
    // ...mapState({
    //   count: (state) => state.count
    // })
    squareCount() {
      return this.$store.getters['pokemon/squareCount']
    }
  },
  methods: {
    increment() {
      this.$store.commit('pokemon/increment')
    },
    incrementBy5() {
      this.$store.commit('pokemon/incrementBy', 5)
    },
    randomNumber() {
      this.$store.commit('pokemon/randomNumber')
    },
    /* incrementRandomInt() {
      this.$store.dispatch('pokemon/incrementRandomInt')
    } */
    // ...mapActions('pokemon', ['incrementRandomInt'])
    ...mapActions('pokemon', {
      addRandomInt: 'incrementRandomInt'
    })
  }
}
</script>

<style scoped>
.counter-container {
  background-color: white;
  width: 400px;
  color: #000;
  position: absolute;
  bottom: 10px;
  right: 10px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 15px;
}
.counter-container h3 {
  margin-top: 0;
}

.btn-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.btn-container button {
  flex: 0 0 calc((100% / 4) - 10px);
  padding: 5px;
}
@media (max-width: 767.98px) {
  .btn-container button {
    flex: 0 0 calc((100% / 2) - 10px);
    padding: 10px;
  }
}
</style>
