import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import IndexLayout from './routes/IndexLayout';
// import wocao from './routes/wocao';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexLayout}/>
        {/* <Route path="/wocao" exact component={wocao} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
