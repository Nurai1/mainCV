import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Purchases from './components/purchasesForExpensePart';

const Main = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:expenseId" component={Purchases} />
      </Switch>
    </Router>
  </Provider>
);


export default Main;
