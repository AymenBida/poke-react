import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './Routes';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement,
);
