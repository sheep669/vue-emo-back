import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: []
  },
  getters: {
    navData: state => state.nav
  },
  mutations: {
    SETNAV(state, data) {
      state.nav = data
    }
  },
  actions: {
    SETNAV({ commit }, data) {
      commit('SETNAV', data)
    }
  },
  modules: {
  }
})
