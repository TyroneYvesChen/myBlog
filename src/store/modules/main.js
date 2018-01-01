import * as types from '../types'

const state={
  httpCounts: 0,
  isCoverShow: false
}

const actions={
  httpCounts({commit},data){
    commit(types.HTTP_COUNTS, data);
  },
  //全局覆盖层是否显示 boolean
  isCoverShow({commit},data){
    commit(types.IS_COVER_SHOW);
  },
}

const mutations={
  [types.HTTP_COUNTS](state,val){
    // val true ++ false --
    val ? state.httpCounts ++ : state.httpCounts --
  },
  //全局覆盖层是否显示 boolean
  [types.IS_COVER_SHOW](state){
    state.isCoverShow = !state.isCoverShow
  }
}

const getters={
  httpCounts(state){
    return state.httpCounts
  },
  isCoverShow(state){
    return state.isCoverShow
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
