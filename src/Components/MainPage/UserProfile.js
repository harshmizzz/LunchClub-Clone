import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import firebase from "firebase";
import { auth, db, storage } from "../Features/firebase";
import "./UserProfile.css";
function UserProfile() {
  const [data, setdata] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    fetchdata();

    firebase.auth().onAuthStateChanged((user) => {
      var storageRef = storage.ref(`/users/${user.uid}/`);
      var profile = storageRef.child("profile.jpg");
      profile.getDownloadURL().then((fireBaseUrl) => {
        setImageAsUrl(fireBaseUrl);
      });
    });
  }, []);

  const fetchdata = async () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const response = db.collection("users").doc(user.uid);
        response
          .get()
          .then((doc) => {
            if (doc.exists) {
              setdata(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("not signed in");
      }
    });
  };

  return (
    <div className="userprofile">
      <div className="userprofileWrapper">
        <div className="userprofilecontainer">
          <div className="userprofileheaderbackground"></div>
          <div className="userprofileheadercontainer">
            <div className="userprofileheaderbox">
              <div className="userprofileheadertop">
                <div className="userprofileheadertopbox">
                  <img
                    src={imageAsUrl}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png";
                    }}
                    alt=""
                  />

                  <div className="userprofileheadertopscore">
                    <div>
                      <p>550</p>
                    </div>
                    <p className="userprofilenetwork">Network Score</p>
                  </div>
                </div>
              </div>
              <div className="userprofileheaderbottom">
                <div className="userprofileheaderbottombox">
                  <p className="userprofilename">{data.name}</p>
                  <p className="userprofilebio">{data.bio}</p>
                  <div className="userprofilelocation">
                    <div className="userprofilelocationbox">
                      <div className="userprofilelocationname">
                        <img
                          src="https://lunchclub.com/static/media/location.a906be17.svg"
                          alt=""
                        />
                        <p>{data.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
