import './scss/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './shared/configs/store.config';
import App from './pages/app';
import Switch from 'react-bootstrap/esm/Switch';
import Details from './pages/details';
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container className="page-wrapper">
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/breed/:id">
            <App />
          </Route>
          <Route path="/breed/detail/:id">
            <Details />
          </Route>
        </Switch>
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
