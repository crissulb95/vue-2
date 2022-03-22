import { createStore } from 'vuex'
import daybook from '../modules/daybook/store'
import pokemon from '../modules/modulo2/store'

const store = createStore({
  modules: {
    pokemon,
    daybook
  }
})

export default store
