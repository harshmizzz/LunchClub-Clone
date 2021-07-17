import React from "react";
import { useHistory } from "react-router-dom";
import "./RegisterBio.css";
import firebase from "firebase";
import { auth } from "../Features/firebase";
import userEvent from "@testing-library/user-event";
function RegisterBio() {
  let history = useHistory();
  function handleback() {
    history.push("/registerprofile");
  }
  function handlenext() {
    history.push("/verification");
    var actionCodeSettings = {
      url: "http://localhost:3000/main",
      handleCodeInApp: true,
    };
    var email = auth.currentUser.email;

    console.log(email);

    auth.currentUser
      .sendEmailVerification({
        url: "http://localhost:3000/main",
      })
      .then(() => {});
  }

  return (
    <div className="registerbio">
      <div className="progress_bar">
        <div className="progrss_main progress_bar1">
          <div className="icons">
            <div className="progress_line"></div>
            <svg
              width="26"
              height="26"
              xmlns="http://www.w3.org/2000/svg"
              alt="HUB"
              class="progress-bar__ProgressImage-sc-175851r-4 eboSwI"
            >
              <path
                d="M13 4.728c-3.25 0-5.91 2.633-5.91 5.852 0 3.22 5.91 9.511 5.91 9.511s5.91-6.292 5.91-9.51c0-3.22-2.66-5.853-5.91-5.853zm0 8.779c-1.625 0-2.954-1.317-2.954-2.927S11.375 7.654 13 7.654c1.625 0 2.955 1.317 2.955 2.926 0 1.61-1.33 2.927-2.955 2.927z"
                fill="#4752A2"
                stroke="#4752A2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="progress_line_animate1"></div>
          </div>
        </div>
        <div className="progrss_main progress_bar3">
          <div className="icons">
            <div className="progrss_line1"></div>
            <svg
              width="26"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="PROFILE"
              class="progress-bar__ProgressImage-sc-175851r-4 bCvzvA"
            >
              <path
                d="M19.613 20.112c-.145-.433-.582-1.238-.873-1.671-1.02-1.423-3.422-2.104-5.315-2.104-1.966 0-4.441.68-5.46 2.104-.292.495-.656 1.3-.874 1.67"
                fill="#4752A2"
                stroke="#4752A2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.788 9.36a5.314 5.314 0 11-10.628 0 5.314 5.314 0 0110.628 0z"
                fill="#4752A2"
                stroke="#4752A2"
              ></path>
            </svg>
            <div className="progress_line_animate"></div>
          </div>
        </div>
        <div className="progrss_main progress_bar4">
          <div className="icons">
            <div className="progrss_line"></div>
            <svg
              width="26"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="FINISH"
              class="progress-bar__ProgressImage-sc-175851r-4 bCvzvA"
            >
              <path
                d="M9.337 20.34c-.568 0-1.064-.425-1.064-.922V5.65c0-.497.496-.922 1.064-.922.568 0 1.065.425 1.065.922v13.84c0 .425-.497.851-1.065.851z"
                fill="#4752A2"
                stroke="#4752A2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M10.402 5.934l7.664 4.116c.64.284.71 1.135.071 1.419l-7.735 3.548"
                fill="#4752A2"
              ></path>
              <path
                d="M10.402 5.934l7.664 4.116c.64.284.71 1.135.071 1.419l-7.735 3.548"
                stroke="#4752A2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="progress_line_animate invisible"></div>
          </div>
        </div>
      </div>
      <div className="register_heading">
        <p>Tell us a little about yourself</p>
      </div>
      <div>
        <div className="register_icons">
          <div
            onClick={handleback}
            className="register_profileData profiledata"
          >
            <img
              className="profileData"
              src="https://lunchclub.com/static/media/social.2592a83f.svg"
              alt=""
            />
          </div>
          <div className="registerbio_Bio">
            <img
              src="https://lunchclub.com/static/media/introduction.7ec72e06.svg"
              alt=""
            />
            <img
              className="caraousel"
              src="https://lunchclub.com/static/media/up-arrow.11cc94b5.svg"
              alt=""
            />
          </div>
        </div>
        <div className="registerbio_box">
          <div className="registerbio_heading">
            <p className="registerbio_heading_big">
              How would you like to be intro'd?
            </p>
            <p className="registerbio_heading_small">
              Tell us whatever you'd like to share with your matches.
            </p>
          </div>
          <textarea placeholder="Bio" cols="30" rows="10"></textarea>
          <p className="registerbio_warning">
            0 characters (minimum 15 characters)
          </p>
          <div className="registerbio_sample">
            <img
              src="https://lunchclub.com/static/media/email-icon.ef184c2c.svg"
              alt="Examples"
            />
            <div>Sample intros</div>
          </div>
          <div className="registerbio_sample_main">
            <div className="registerbio_sample_main_item">
              <img
                src="https://lunchclub.com/static/media/green-avatar.21004c97.svg"
                alt="Avatar"
              />
              <div className="register_bio_sample_main_item_container">
                <p>
                  Kim is a Product Designer at Facebook who writes about design
                  in everyday life. She loves working on impactful products, and
                  talking to people about them.
                </p>
              </div>
            </div>
            <div className="registerbio_sample_main_item">
              <img
                src="https://lunchclub.com/static/media/red-avatar.ef89bd8b.svg"
                alt="Avatar"
              />
              <div className="register_bio_sample_main_item_container">
                <p>
                  Sami is a mechanical engineer who is working on a new startup
                  idea in the EV battery space.
                </p>
              </div>
            </div>
            <div className="registerbio_sample_main_item">
              <img
                src="https://lunchclub.com/static/media/orange-avatar.60ea375b.svg"
                alt="Avatar"
              />
              <div className="register_bio_sample_main_item_container">
                <p>Omar is an opera singer who writes his own blog.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="registerbio_button">
          <button onClick={handleback} className="registerbio_back">
            Back
          </button>
          <button onClick={handlenext} className="registerbio_next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterBio;
