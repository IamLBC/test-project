import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const INCREMENT = 'increment'
export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        [INCREMENT] (state) {
            state.count++
        }
    },
    actions: {
        [INCREMENT] (context) {
            context.commit(INCREMENT)
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})