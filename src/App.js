import React, { useEffect } from "react";
import Header from "./Components/MainPage/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./Components/Features/firebase";
import Login from "./Components/LoginPage/Login";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { selectUser } from "./Components/Features/userSlice";
import { login, logout } from "./Components/Features/userSlice";
import { useSelector } from "react-redux";
import AfterSignUp from "./Components/LoginPage/AfterSignUp";
import Details from "./Components/LoginPage/Details";
import RegisterProfile from "./Components/LoginPage/RegisterProfile";
import RegisterBio from "./Components/LoginPage/RegisterBio";
import Verification from "./Components/LoginPage/Verification";
import Main from "./Components/MainPage/Main";
import Home from "./Components/MainPage/Home";
import Invite from "./Components/MainPage/Invite";
import Connections from "./Components/MainPage/Connections";
import Chat from "./Components/MainPage/Chat";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main" exact>
            <Header />
            <Main />
          </Route>
          <Route path="/weekly" exact>
            <LoginPage />
          </Route>
          <Route path="/after" exact>
            <AfterSignUp />
          </Route>
          <Route path="/details" exact>
            <Details />
          </Route>
          <Route path="/registerprofile" exact>
            <RegisterProfile />
          </Route>
          <Route path="/registerbio" exact>
            <RegisterBio />
          </Route>
          <Route path="/verification" exact>
            <Verification />
          </Route>
          <Route path="/home" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/invite" exact>
            <Header />
            <Invite />
          </Route>
          <Route path="/connections" exact>
            <Header />
            <Connections />
          </Route>
          <Route path="/chat" exact>
            <Header />
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
