import { createStore } from 'vuex'
import pokemonStore from '../modules/modulo2/store'

const store = createStore({
  modules: {
    pokemon: pokemonStore
  }
})

export default store
