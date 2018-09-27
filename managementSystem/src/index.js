import dva from 'dva';
import './styles/index.scss';
// import utils from 'utils/storage';
// console.log(utils, 'utils')
// import { browserHistory } from 'dva/router';
// import { useRouterHistory } from 'dva/router';
// import { createHashHistory } from 'history';

// 1. Initialize
const app = dva({
    //   history: browserHistory,
    // history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/global').default);
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
