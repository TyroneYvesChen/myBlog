
import { routerRedux } from 'dva/router';

export default {

  namespace: 'user',

  state: {
    token: ''
  },

  subscriptions: {
  },

  effects: {
    *fetchToken({ payload }, { call, put }) {  // eslint-disable-line
      yield call(_ => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
            console.log(payload)
          }, 1000);
        })
      })
      yield put({ type: 'save', payload: '这是个模拟的token！！！' });
      yield put(routerRedux.push('/'));
    },
  },

  reducers: {
    save(state, action) {
      console.log(state)
      console.log(action)
      return { ...state, token: action.payload };
    },
  },

};
