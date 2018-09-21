import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const INCREMENT = 'increment'
export default new Vuex.Store({
  state: {
    count: 'init'
  },
  mutations: {
    [INCREMENT] (state, payload) {
      state.count = payload.str
    }
  },
  actions: {
    [INCREMENT] (context) {
      context.commit(INCREMENT)
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
