import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>, document.getElementById("root"));
}
