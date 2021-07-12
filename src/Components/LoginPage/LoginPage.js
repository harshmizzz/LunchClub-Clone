import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginPage.css";
import firebase from "firebase";
import { auth } from "../Features/firebase";
function LoginPage() {
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const login = () => {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      auth
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
        })
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
            })
          );
        })
        .catch((error) => {});
    }
  };
  
  const registerGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
      })
      .then((userAuth) => {
        userAuth.user.then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
      auth.onAuthStateChanged(user => {
        if(user) {
          window.location = '/weekly';
        }
      });
  };
  const register = () => {
    var actionCodeSettings = {
      url: "http://localhost:3000/weekly",
      handleCodeInApp: true,
    };
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .then((userAuth) => {
        userAuth.user.then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };
  return (
    <div className="loginpage">
      <div className="loginpage_logo">
        <img
          src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
          alt=""
        />
      </div>
      <p className="loginpage_text">Log in</p>
      <img
        src="https://lunchclub.com/static/media/cities-graphic.e00b93ed.svg"
        alt=""
      />
      <div className="loginpage_main">
        <button onClick={registerGoogle} className="loginpage_main_google">
          <div className="loginpage_buttonbox">
            <img
              src="https://lunchclub.com/static/media/google.686f8efa.svg"
              alt=""
            />
            <p>Continue with Google</p>
          </div>
        </button>
        <hr />
        <input type="email" placeholder="Email" />
        <button className="loginpage_main_send" onClick={login}>
          Send me a login link
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
