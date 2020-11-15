import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageBase64 : 0,
  },
  mutations: {
    increment (state) {
      state.imageBase64++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
