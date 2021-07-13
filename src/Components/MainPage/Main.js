import React from "react";
import Header from "./Header";
import "./Main.css";
function Main() {
  return (
    <>
    <Header />
    <div className="main">
      <div className="mainContainer">
        <div className="mainBox">
          <p className="mainBox_heading">Tell us more about you</p>
          <div className="mainBox_items">
            <p className="mainBox_itemsText">
              We need a bit more information before we can start curating
              relevant matches for you and would love to learn more about your
              professional background and goals.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVNNZIaSpvOGOpMftktIaVI-MpPyYbUZAp4Ag91xf4ami8PA/viewform?entry.1584333928=harshmharsh791@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell us more
            </a>
            <p  className="mainBox_itemsText">
              If you have already filled out this form,{" "}
              <span> there is no need to resubmit!</span> We are reviewing these
              as quickly as possible and we will reach back shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;
