import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CurrPage: 0
  },
  mutations: {
    ChangePage(state,newPage){
      state.CurrPage = newPage
    }
  },
  getters:{
    getCurrPage(state){
      return state.CurrPage
    }

  },
  actions: {
  },
  modules: {
  }
})
