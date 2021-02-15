import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>, document.getElementById("root"));
}

rerender(store.getState());

store.subscribe(() => rerender(store.getState()));
