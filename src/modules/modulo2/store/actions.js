import getRandomInt from '../../../helpers/number/getRandomInt'

export default {
  async incrementRandomInt({ commit }) {
    commit('setLoading')
    commit('incrementBy', await getRandomInt())
    commit('setLoading')
  }
}
