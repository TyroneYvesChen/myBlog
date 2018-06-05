import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './rootState'
import getters from './getters'
import main from './modules/main'
Vue.use(Vuex)

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    main,
  },
  strict: true
})

export default store
