import React from "react";
import Header from "./Components/MainPage/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/LoginPage/Login";
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/weekly">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
