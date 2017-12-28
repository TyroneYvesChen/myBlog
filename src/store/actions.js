import * as types from './types'
export default {
  showMask({commit,state,rootState},data){
    commit(types.ROOT_MASK);
  },
  setWocao({commit,state,rootState},data){
    commit(types.TEXT, data);
  }
}
