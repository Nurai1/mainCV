import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Purchases from './components/purchasesForExpensePart/index';

const Main = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:expenseId" component={Purchases} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Main;
