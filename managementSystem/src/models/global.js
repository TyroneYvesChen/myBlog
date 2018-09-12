import { routerRedux } from 'dva/router';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * login({ payload },{select,call, put}){
    //这里state是所有model的state，如获取model  app下的state的isLogin就写，state.app.isLogin
    const isLogin = yield select(state => state.isLogin);
    console.log('logincheck',isLogin);
    if(isLogin === false){
      yield put((routerRedux.push('/login')));
    }
},

  },

  reducers: {

  },

  subscriptions: {
    setup({ history, dispatch }) {
      console.log(history)
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen((location) => {
        const { pathname, search } = location
        console.log(location)
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
