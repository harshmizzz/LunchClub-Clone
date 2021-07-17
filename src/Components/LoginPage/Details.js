import React, { useMemo, useState } from "react";
import "./Details.css";
import { useHistory } from "react-router";
import Select from "react-select";
import firebase from "firebase";
import countryList from "react-select-country-list";
import { db } from "../Features/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
function Details() {
  const user = firebase.auth().currentUser;
  const user1 = useSelector(selectUser)
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  let history = useHistory();
  const changeHandler = (value) => {
    setValue(value);
    db.collection("users").doc(user1.uid).set({
      name: user.displayName,
      email: user.email,
      location: value.label,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push("/registerprofile");
  };

  return (
    <div className="details">
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
            <div className="progress_line_animate"></div>
          </div>
        </div>
        <div className="progrss_main progress_bar3">
          <div className="icons">
            <div className="progrss_line"></div>
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
            <div className="progress_line"></div>
          </div>
        </div>
      </div>
      <div className="details_main">
        <p className="details_big">Which hub are you in?</p>
        <p className="details_small">
          We're active in major cities and we schedule meetings based on time
          zones. Let us know your home base.
        </p>
      </div>
      {console.log(value.label)}
      <div className="details_country">
        <Select
          className="country_selector"
          options={options}
          value={value}
          onChange={changeHandler}
          placeholder="Find Your Hub"
        />
      </div>
    </div>
  );
}

export default Details;
