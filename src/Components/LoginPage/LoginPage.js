import React from "react";
import "./LoginPage.css";
function LoginPage() {
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
        <button className="loginpage_main_google">
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
        <button className="loginpage_main_send">Send me a login link</button>
      </div>
    </div>
  );
}

export default LoginPage;
