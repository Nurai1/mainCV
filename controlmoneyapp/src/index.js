import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './store/reducer';
import Main from './Main';
import './styles/main.sass';

const persistedState = localStorage.getItem('controlMoneyStore') ? JSON.parse(localStorage.getItem('controlMoneyStore')) : undefined;

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  localStorage.setItem('controlMoneyStore', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root'),
);
