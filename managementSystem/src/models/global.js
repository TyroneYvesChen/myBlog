// import { routerRedux } from 'dva/router';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * checkLoginStatus({ payload }, { select, call, put }) {
      //这里state是所有model的state，如获取model  app下的state的isLogin就写，state.app.isLogin
      const user = yield select(state => state.user);
      console.log(user, 'userModel');
      // 将router的跳转限制改到IndexLayout中
      // if (!user.token) {
      //   yield put((routerRedux.push('/login')));
      // }
    },

  },

  reducers: {

  },

  subscriptions: {
    setup({ history, dispatch }) {
      console.log(history)
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen((location) => {
        const { pathname } = location
        console.log(location)
        if (pathname !== '/login'){
          dispatch({
            type: 'checkLoginStatus'
          })
        }
        // if (typeof window.ga !== 'undefined') {
        //   window.ga('send', 'pageview', pathname + search);
        // }
      });
    },
  },
};
