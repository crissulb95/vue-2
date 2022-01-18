export default {
  increment(state) {
    state.count++
    state.lastMutation = `increment ${state.count}`
  },
  incrementBy(state, val = 1) {
    state.count += val
    state.lastMutation = `incrementBy ${val}`
    state.lastVal = val
  },
  randomNumber(state) {
    state.count = Math.ceil(Math.random() * 100)
    state.lastMutation = 'randomNumber'
  },
  setLoading(state) {
    state.isLoading = !state.isLoading
  }
}
