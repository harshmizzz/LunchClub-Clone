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
            <a href="/weekly">
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
              <a href="/weekly" className="alreadylogin">
                <p>Log in here</p>
              </a>
            </div>
          </div>
          <div className="signup_data">
            <Testimonials data1={data1} data2={data2} />
          </div>
        </div>
      </div>
      <div className="login_arrow">
        <img
          src="https://lunchclub.com/static/media/downarrow.b2ab05b0.svg"
          alt=""
        />
      </div>
      <div className="login_how">
        <p className="how_small">HOW IT WORKS</p>
        <p className="how_big">It's simple, really</p>
        <img
          className="stroke"
          src="	https://lunchclub.com/static/media/stroke.01d02cb2.svg"
          alt=""
        />
        <div className="how_summary">
          <div className="item1">
            <img
              src="https://lunchclub.com/static/media/tell.9ad906c2.svg"
              alt=""
            />
            <p>Tell us your background, goals, and what you're excited about</p>
          </div>
          <div className="item2">
            <img
              src="https://lunchclub.com/static/media/connection.5e02f461.svg"
              alt=""
            />
            <p>
              Each week, we'll see if you'd like to meet with a new connection
            </p>
          </div>
          <div className="item3">
            <img
              src="https://lunchclub.com/static/media/conversation.5acf03c4.svg"
              alt=""
            />
            <p>Our AI will arrange for a 1:1 conversation with a match</p>
          </div>
        </div>
      </div>
      <div className="login_highlights">
        <p className="highlights_small">Press Highlights</p>
        <p className="highlights_big">We're Getting Noticed</p>
        <div className="highlights_box">
          <div className="box_item">
            <a href="https://www.wsj.com/articles/apps-serve-professionals-distanced-networking-with-novel-twists-11597842000">
              <div className="highlights_img_box">
                <img
                  src="https://lunchclub.com/static/media/wsj.24908341.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="https://www.forbes.com/sites/frederickdaso/2019/09/27/lunchclub-an-ai-relationship-curator-startup-raises-4m-from-a16z-to-connect-professionals-offline/">
              <div className="highlights_img_box">
                <img
                  src="https://lunchclub.com/static/media/forbes.93862742.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="https://www.businessinsider.com/lunchclub-pitch-deck-series-a-andreessen-horowitz-led-2019-9">
              <div className="highlights_img_box">
                <img
                  src="https://lunchclub.com/static/media/bi.a3aa84d1.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="https://techcrunch.com/2019/09/18/lunchclub-raises-4m-from-a16z-for-its-ai-warm-intro-service/">
              <div className="highlights_img_box">
                <img
                  src="https://lunchclub.com/static/media/tc.20545d5f.svg"
                  alt=""
                />
              </div>
            </a>
            <a href="https://www.cnbc.com/2020/09/01/lunchclub-tops-100-million-valuation-amid-quarantine-usage-spike.html">
              <div className="highlights_img_box">
                <img
                  src="https://lunchclub.com/static/media/cnbc.db6b4373.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <p className="highlights_invest">OUR INVESTORS</p>
        <div className="investors_container">
          <a href="https://lsvp.com/" target="_blank">
            <img
              src="https://lunchclub.com/static/media/lsvp.2df42289.svg"
              alt=""
            />
          </a>
          <a href="https://www.coatue.com/" target="_blank">
            <img
              src="https://lunchclub.com/static/media/coatue.6f4d255b.svg"
              alt=""
            />
          </a>
          <a href="https://a16z.com/" target="_blank">
            <img
              src="https://lunchclub.com/static/media/a16z.b808fbed.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="login-club">
        <div className="club_items">
          <div className="club_big">
            <p className="club_p_small">JOIN THE CLUB</p>
            <p className="club_p_big">
              Discover the magic of connecting with someone you never would have
              met.
            </p>
          </div>
          <div className="club_small">
            <p>
              Create an account in minutes and get your first meeting scheduled!
            </p>
            <div className="club_small_emailitems">
              <input type="email" placeholder="Enter Your Email" />
              <button> Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="login_footer">
        <a href="https://jobs.lever.co/lunchclub" target="_blank">
          <div className="login_footer_link">
            <p>Careers</p>
            <div className="login_footer_box">
              <p>WE'RE HIRING</p>
            </div>
          </div>
        </a>

        <div className="login_social">
          <a href="https://www.instagram.com/lunchclubai/" target="_blank">
            <img
              src="https://lunchclub.com/static/media/instagram.4d27f9ed.svg"
              alt=""
            />
          </a>
          <a href="https://twitter.com/lunchclubai" target="_blank">
            <img
              src="https://lunchclub.com/static/media/twitter.96833171.svg"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/company/lunchclub" target="_blank">
            <img
              src="https://lunchclub.com/static/media/linkedin.4ac682a6.svg"
              alt=""
            />
          </a>
        </div>
        <div className="login_footer_privacy">
          <a href="https://lunchclub.com/privacy">Privacy</a>
          <img
            src="https://lunchclub.com/static/media/logo-icon.bacfc46d.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
