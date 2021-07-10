import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import Testimonials from "./Testimonials";
function Login() {
  const [data1, setdata] = useState([]);
  const [data2, setdata2] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://reqres.in/api/users?page=1");
      setdata(res.data.data);
      console.log(data1);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://reqres.in/api/users?page=2");
      setdata2(res.data.data);
      console.log(data2);
    };
    fetchPosts();
  }, []);
  return (
    <div className="login">
      <div className="top_container">
        <div className="login_header">
          <div className="logo">
            <img
              src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
              alt="logo"
            />
          </div>
          <div className="header_login">
            <a href="#">
              <p>Log in</p>
            </a>
          </div>
        </div>
        <div className="signup_content">
          <div className="signup_function">
            <p className="signup_heading">Your Network is Waiting for you</p>
            <p className="signup_subHeading">
              We facilitate casual conversations that lead to not-so-casual
              professional impact. Powered by AI.
            </p>
            <div className="signup_buttons">
              <button className="signup_google">
                <img
                  src="https://lunchclub.com/static/media/google.b1154755.svg"
                  alt="google"
                />
                <p>Sign up with Google</p>
              </button>
              <p className="signup_or">or</p>
              <div className="signup_email">
                <input
                  type="email"
                  className="signup_emailInput"
                  placeholder="Enter your Email"
                />
                <button className="signup_emailSubmit">Get started</button>
              </div>
            </div>
            <div className="login_buttonAlready">
              <p className="alreadytext">Already have an account?&nbsp;</p>
              <a href="#" className="alreadylogin">
                <p>Log in here</p>
              </a>
            </div>
          </div>
          <div className="signup_data">
            <Testimonials data1={data1} data2={data2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
