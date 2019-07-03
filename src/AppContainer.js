import React from "react";
import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {
  componentWillMount() {
    this.checkForSavedAuth();
  }

  render() {
    if (this.state.user) return <DashboardComponent user={this.state.user} />;
    else return <SignupComponent loginFn={this.loggedIn} />;
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = user => this.setState({ user: user });
}

export default AppContainer;
