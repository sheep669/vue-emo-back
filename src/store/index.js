/*
 * @Author: sheep669
 * @Description: vuex状态管理器
 * @Date: 2022-06-26 21:46:01
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: [],
    token: ''
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
