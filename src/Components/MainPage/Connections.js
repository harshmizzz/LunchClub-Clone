import React, { useEffect, useState } from "react";
import "./Connections.css";
import firebase from "firebase";
import { storage } from "../Features/firebase";
function Connections() {
  const [imageAsUrl, setImageAsUrl] = useState("");
  const user = firebase.auth().currentUser;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      var storageRef = storage.ref(`/users/${user.uid}/`);
      var profile = storageRef.child("profile.jpg");
      profile.getDownloadURL().then((fireBaseUrl) => {
        setImageAsUrl(fireBaseUrl);
      });
    });
  });
  return (
    <div className="connection">
      <div className="connection_container">
        <div className="connection_Containerbox">
          <p className="connectionHeading">Connection stats</p>
          <div className="connectionCard">
            <div className="connectionProfile">
              <div className="connectionProfileData">
                <div className="connectionProfileDataTop">
                  {user && (
                    <>
                      <img src={imageAsUrl}  alt="" />
                    </>
                  )}
                  <div className="connectionProfilestats">
                    <div className="connectionsStatsBox">
                      <div className="connectionStatsBoximg">
                        <img
                          src="https://lunchclub.com/static/media/meetings.573b7a69.svg"
                          alt=""
                        />
                        <p>0</p>
                      </div>
                      <p className="connectionsStatsBoxName">Total Meetings</p>
                    </div>
                    <div className="connectionsStatsBox">
                      <div className="connectionStatsBoximg">
                        <img
                          src="https://lunchclub.com/static/media/streak.0608f40a.svg"
                          alt=""
                        />
                        <p>0</p>
                      </div>
                      <p className="connectionsStatsBoxName">Week Streak</p>
                    </div>
                    <div className="connectionsStatsBox">
                      <div className="connectionStatsBoximg">
                        <img
                          src="https://lunchclub.com/static/media/clubpoints.7f6edf6b.svg"
                          alt=""
                        />
                        <p>5</p>
                      </div>
                      <p className="connectionsStatsBoxName">Clubpoints</p>
                    </div>
                  </div>
                </div>
                <p className="connectionProfileDataBottom">
                  {user && (
                    <>
                      {" "}
                      <p>{user.displayName}</p>{" "}
                    </>
                  )}
                </p>
              </div>
              <div className="connectionProfileScore">
                <a href="#" className="ProfileScoreLinks">
                  <div className="ProfileScoreLinksBox">
                    <div className="ProfileScoreLinksName">
                      <p>Your network score</p>
                      <div>
                        <p>550</p>
                      </div>
                    </div>
                    <p>See breakdown</p>
                  </div>
                </a>
                <a href="#" className="ProfileScoreLinks">
                  <div className="ProfileScoreLinksBox">
                    <div className="ProfileScoreLinksName">
                      <p>You inspired</p>
                      <p className="ScoreLinksName"> 0 meetings</p>
                    </div>
                    <p>View analysis</p>
                  </div>
                </a>
                <a href="#" className="ProfileScoreLinks">
                  <div className="ProfileScoreLinksBox">
                    <div className="ProfileScoreLinksName">
                      <p>Superinviters</p>
                      <img
                        src="https://lunchclub.com/static/media/confetti.8c87afe6.svg"
                        alt=""
                      />
                    </div>
                    <p>Look at the list</p>
                  </div>
                </a>
              </div>
            </div>
            <p className="connectionCardSubheading">
              Most Connected in your network
            </p>
            <hr />
            <div className="connectionCardUsers">
              <p>No Connections to show</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connections;
