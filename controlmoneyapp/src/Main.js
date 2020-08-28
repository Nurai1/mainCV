import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Purchases from './components/purchasesForExpensePart';

const Main = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/:expenseId" component={Purchases} />
    </Router>
  </Provider>
);


export default Main;
