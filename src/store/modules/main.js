import * as types from '../types'

const state={
  httpCounts: 0
}

const actions={
  httpCounts({commit},data){
    commit(types.HTTP_COUNTS, data);
  },
}

const mutations={
  [types.HTTP_COUNTS](state,val){
    // val true ++ false --
    val ? state.httpCounts ++ : state.httpCounts --
  },
}

const getters={
  httpCounts(state){
    return state.httpCounts
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
