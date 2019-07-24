import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';   
import { composeWithDevTools } from 'redux-devtools-extension';    //for redux devtool
import reduxThunk from "redux-thunk";

import App from './components/App';
import reducers from './reducers';
 
//here we are using composeWithDevTools from npm package to use the devtool
const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));
 
const root = document.querySelector('#root');
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root);