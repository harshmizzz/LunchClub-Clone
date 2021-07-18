import React, { useEffect, useState } from "react";
import "./AfterSignUp.css";
import firebase from "firebase";
import { auth } from "../Features/firebase";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
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

  const dispatch = useDispatch();

  const updatename = () => {
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: firstname + " " + lastname,
      })
      .then(() => {
        auth.onAuthStateChanged((userAuth) => {
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              name: userAuth.displayName,
            })
          );
        });
      });
  };

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
        <input
          name="firstname"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          name="lastname"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          type="text"
          placeholder="Last Name"
          required
        />

  
        <div className="after_main_empty"></div>
        <a href="/details">
          <button onClick={updatename}>Lets Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default AfterSignUp;
