
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
      console.log(routerRedux, '====================')
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
      //  yield put(routerRedux.push({
      //   pathname:"/",   //这有这个参数的话地址就是：localhost:8000
      //   hash:"vison"    //这里是一个hash值,地址就变成了： localhost:8000/#vison
      // }))
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
