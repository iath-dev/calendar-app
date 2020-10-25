import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import CalendarApp from './CalendarApp';

import './styles.css'
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <CalendarApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
