import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className="app-wrapper-content">

          <Route path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile"
            render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/friends"
            render={() => <Dialogs state={props.state.dialogsPage} />} />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
