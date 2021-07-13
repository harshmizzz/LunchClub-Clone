import React from "react";
import { auth } from "../Features/firebase";
import "./AfterSignUp.css";
function AfterSignUp() {
  function signout() {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
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
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <div className="after_main_empty"></div>
        <a href="/details">
          <button>Lets Get Started</button>
        </a>
        <button onClick={signout}>ddd</button>
      </div>
    </div>
  );
}

export default AfterSignUp;
