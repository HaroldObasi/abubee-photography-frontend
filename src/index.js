import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from "./store/reducers/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = composeEnhancers(
  applyMiddleware(promiseMiddleware)
)(createStore);

ReactDOM.render(

  <Provider store = {reduxStore(rootReducer)}>
    <App />
  </Provider>,

  document.getElementById('root')
);
