import React from "react";
import "./Home.css";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="left_container">
          <div className="left_containerBox">
            <p>
              <p>Daily Picks</p>
            </p>
          </div>
        </div>
        <div className="right_container">
          <div className="home_progress">
            <div>
              <p>0 out of 10 completed for today </p>
            </div>
            <div className="home_progressBar">
              <div></div>
            </div>
          </div>
          <div className="right_container_daily">
            <div>
              <div className="daily_container">
                <div className="daily_containerTop">
                  <p>Would you like to meet someone like Ratan?</p>
                  <div className="dailytopBox">
                    <div className="dailyBoxUser">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt=""
                      />
                      <div className="dailyBoxUserName">
                        <p className="dailyBoxBig">Ratan Kumar</p>
                        <p className="dailyBoxSmall">Bangalore</p>
                      </div>
                    </div>
                    <p>
                      Ratan is a VP Engineering at smallcase Technologies Pvt
                      Ltd who would like to discuss problems people face while
                      scaling fintech product.
                    </p>
                  </div>
                </div>
                <div className="daily_containerBottom">
                  <button className="dailyBottomButtons">
                    <div>
                      <ThumbUpOutlinedIcon fontSize="small" />
                      <p>Yes</p>
                    </div>
                  </button>
                  <button className="dailyBottomButtons">
                    <div>
                      <ThumbDownOutlinedIcon fontSize="small" />
                      <p>No</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
