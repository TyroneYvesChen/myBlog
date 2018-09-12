import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import IndexLayout from './routes/IndexLayout';
// import wocao from './routes/wocao';

function RouterConfig(data) {
  console.log(data)
  const { history } = data
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexLayout}/>
        {/* <Route path="/wocao" exact component={wocao} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
