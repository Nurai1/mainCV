import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducer';
import Main from './Main';
import './styles/main.sass';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root'),
);
