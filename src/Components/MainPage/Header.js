import React, { useEffect, useState } from "react";
import "./Header.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import TodayIcon from "@material-ui/icons/Today";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import InputOption from "./InputOption";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { auth, storage } from "../Features/firebase";
import { logout, selectUser } from "../Features/userSlice";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = React.useState(false);
  const [display, setWidth] = React.useState("");
  const user = firebase.auth().currentUser;
  const [imageAsUrl, setImageAsUrl] = useState("");
  const dispatch = useDispatch();
  const showMenu = () => {
    setToggle(!toggle);
    if (toggle === true) {
      setWidth("none");
    } else {
      setWidth("block");
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      var storageRef = storage.ref(`/users/${user.uid}/`);
      var profile = storageRef.child("profile.jpg");
      profile.getDownloadURL().then((fireBaseUrl) => {
        setImageAsUrl(fireBaseUrl);
      });
    });
  });

  const history = useHistory();
  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
    history.push("/");
  };

  return (
    <div className="header">
      <div className="header_items">
        <div className="header_logo_main">
          <Link to="/home">
            <img
              src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
              alt=""
            />
          </Link>
          <div className="header_searchBox">
            <div className="header_searchBoxmain">
              <input
                type="search"
                placeholder="Search Lunchclub"
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="header_buttons">
          <Link to="/home">
            <a href="#" className="header_buttons_links">
              <div className="header_button_container">
                <InputOption
                  Icon={HomeRoundedIcon}
                  color="#1f2020"
                  fontSize="large"
                />
              </div>
            </a>
          </Link>
          <Link to="/main">
            <a href="#" className="header_buttons_links">
              <div className="header_button_container">
                <InputOption
                  fontSize="large"
                  Icon={TodayIcon}
                  color="#1f2020"
                />
              </div>
            </a>
          </Link>

          <a href="#" className="header_buttons_links">
            <Link to="/Invite">
              <div className="header_button_container">
                <InputOption
                  Icon={MailOutlineRoundedIcon}
                  color="#1f2020"
                  fontSize="large"
                />
              </div>
            </Link>
          </a>

          <Link to="/connections">
            <a href="#" className="header_buttons_links">
              <div className="header_button_container">
                <InputOption
                  Icon={PeopleRoundedIcon}
                  color="#1f2020"
                  fontSize="large"
                />
              </div>
            </a>
          </Link>
          <Link to="/chat">
            <a href="#" className="header_buttons_links">
              <div className="header_button_container">
                <InputOption
                  Icon={ChatBubbleOutlinedIcon}
                  color="#1f2020"
                  fontSize="large"
                />
              </div>
            </a>
          </Link>
          <div onClick={showMenu} className="header_button_profile">
            <div className="header_profile_img">
              {user && (
                <>
                  <img
                    src={imageAsUrl}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png";
                    }}
                    alt=""
                  />
                </>
              )}
              <ArrowDropDownOutlinedIcon color="#1f2020" />
            </div>
            <div style={{ display }} className="header_hamburger">
              <div className="header_hamburger_main">
                <div className="header_hamburger_profile">
                  <div className="header_hamburger_profile_name">
                    {user && (
                      <>
                        <img
                          src={imageAsUrl}
                          alt=""
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png";
                          }}
                        />
                      </>
                    )}
                    <Link to="/userprofile">
                      <div className="header_hamburger_profile_data">
                        <p className="header_hamburger_profile_data_big">
                          {user && (
                            <>
                              {" "}
                              <p>{user.displayName}</p>{" "}
                            </>
                          )}
                        </p>
                        <p className="header_hamburger_profile_data_small">
                          View Profile
                        </p>
                      </div>
                    </Link>
                  </div>
                  <a>
                    <div className="header_hamburger_clubpoints">
                      <p>5</p>
                      <RadioButtonCheckedOutlinedIcon
                        fontSize="small"
                        color="secondary"
                      />
                    </div>
                  </a>
                </div>
                <hr />
              </div>
              <div className="header_hamburger_main">
                <div className="header_hamburger_submain">
                  <div className="header_hamburger_icon_container">
                    <SettingsIcon fontSize="small" />
                  </div>
                  <p>Settings</p>
                </div>
              </div>
              <div className="header_hamburger_main">
                <div className="header_hamburger_submain">
                  <div className="header_hamburger_icon_container">
                    <ChatBubbleOutlinedIcon fontSize="small" />
                  </div>
                  <p>Give feedback</p>
                </div>
              </div>
              <div className="header_hamburger_main">
                <div className="header_hamburger_submain">
                  <div className="header_hamburger_icon_container">
                    <HelpOutlineIcon fontSize="small" />
                  </div>
                  <p>FAQ</p>
                </div>
              </div>
              <div onClick={logoutofApp} className="header_hamburger_main">
                <div className="header_hamburger_submain">
                  <div className="header_hamburger_icon_container">
                    <ExitToAppIcon fontSize="small" />
                  </div>
                  <p>Log out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
