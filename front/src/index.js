import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import linksReducer from "./store/reducers/linksReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(linksReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
      <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

