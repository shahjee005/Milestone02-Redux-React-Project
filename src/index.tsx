
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./index.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore;
export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store()}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")

);

serviceWorker.unregister();
