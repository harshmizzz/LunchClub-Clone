import React, { useEffect, useState } from "react";
import "./AfterSignUp.css";
import firebase from "firebase";
function AfterSignUp() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <div className="aftersignup">
      <div className="after_main">
        <div className="after_main_logo">
          <img
            src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
            alt=""
          />
        </div>
        <img
          src="https://lunchclub.com/static/media/cities-graphic.e00b93ed.svg"
          alt=""
        />
        <input val={firstname} type="text" placeholder="First Name" />
        <input val={lastname} type="text" placeholder="Last Name" />
        <div className="after_main_empty"></div>
        <a href="/details">
          <button>Lets Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default AfterSignUp;
