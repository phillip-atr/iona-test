import './scss/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AppProvider from './shared/contexts/app.context';
import store from './shared/configs/store.config';
import App from './pages/app';

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
