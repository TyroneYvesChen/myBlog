import * as types from './types'

const mutations = {
  [types.ROOT_MASK](state,val){
    state.maskShow=!state.maskShow;
  },
  [types.TEXT](state,val){
    state.wocao = val;
  }
}
export default mutations

