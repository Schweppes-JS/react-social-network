import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from "./components/common/preloader/Preloader";
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs"
            render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?"
            render={withSuspense(ProfileContainer)} />
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

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;