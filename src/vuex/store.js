/**
 * vuex 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toast: {
    show: false,
    text: '',
    time: 1000
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters: {
    toastTime () {
      return state.toast.time
    }
  },
  mutations: {
    UPDATE_TOAST (state, toast) {
      state.toast = Object.assign({}, toast)
    }
  },
  actions: {
    UPDATE_TOAST ({commit}, toast) {
      commit('UPDATE_TOAST', toast)
      let st = null
      clearTimeout(st)
      st = setTimeout(() => {
        toast.show = false
        commit('UPDATE_TOAST', toast)
      }, toast.time)
    }
  },
  modules: {

  }
})
