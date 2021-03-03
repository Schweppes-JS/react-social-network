import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class App extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?"
            render={() => <ProfileContainer />} />
          <Route path="/friends"
            render={() => <DialogsContainer />} />
          <Route path="/users"
            render={() => <UsersContainer />} />
          <Route path="/login"
            render={() => <Login />} />

        </div>
      </div>
    );
  }
};



export default compose(
  withRouter,
  connect(null, { initializeApp })
)(App);
