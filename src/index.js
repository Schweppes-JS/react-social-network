import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById("root"));
}

rerender(store.getState());

store.subscribe(() => rerender(store.getState()));
