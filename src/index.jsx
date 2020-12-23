import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
