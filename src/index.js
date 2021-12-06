import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import "../src/main.scss";
//import "../src/main.scss";
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
//import store from './store/';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();