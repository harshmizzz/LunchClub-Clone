import React, { useEffect } from "react";
import Header from "./Components/MainPage/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./Components/Features/firebase";
import Login from "./Components/LoginPage/Login";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { selectUser } from "./Components/Features/userSlice";
import { login, logout } from "./Components/Features/userSlice";
import { useSelector } from "react-redux";
import AfterSignUp from "./Components/LoginPage/AfterSignUp";
import Details from "./Components/LoginPage/Details";
import RegisterProfile from "./Components/LoginPage/RegisterProfile";
import RegisterBio from "./Components/LoginPage/RegisterBio";
import Verification from "./Components/LoginPage/Verification";
import Main from "./Components/MainPage/Main";
import PageSelector from "./PageSelector";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
          <PageSelector />
          </Route>
          <Route path="/weekly">
            <LoginPage />
          </Route>
          <Route path="/after">
            <AfterSignUp />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/registerprofile">
            <RegisterProfile />
          </Route>
          <Route path="/registerbio">
            <RegisterBio />
          </Route>
          <Route path="/verification">
            <Verification />
          </Route>
          <Route to="/main">
            <Main />
          </Route>
        </Switch>

        {/* {!user ? (
          
        ) : (
          <div>
            <Header />

            <Switch>
              
            </Switch>
          </div>
        )} */}
      </div>
    </Router>
  );
}

export default App;
