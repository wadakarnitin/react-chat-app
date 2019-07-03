import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyD7vA_OGzWFrO-vUYVKXHplaCXxNoyGRqg",
  authDomain: "my-chat-app-488e8.firebaseapp.com",
  databaseURL: "https://my-chat-app-488e8.firebaseio.com",
  projectId: "my-chat-app-488e8",
  storageBucket: "my-chat-app-488e8.appspot.com",
  messagingSenderId: "66818711611",
  appId: "1:66818711611:web:841d69357de68910"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
