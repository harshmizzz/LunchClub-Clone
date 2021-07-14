import React from "react";
import "./Invite.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

function Invite() {
  return (
    <div className="invite">
      <div className="invite_container">
        <div className="invite_containerTop">
          <p className="invite_topHeading">Build the Lunchclub community!</p>
          <p className="invite_topsubHeading">
            Invite your friends, earn 5 Clubpoints when they sign up, and earn 5
            more when they take their first meeting.
          </p>
          <div className="invite_topEmailbox">
            <div className="invite_topEmailinput">
              <input type="email" placeholder="Enter name or email" />
            </div>
            <button>send invite</button>
          </div>
          <div className="invite_topInvitebox">
            <div className="invite_topInvite">
              <input
                value="https://lunchclub.com/?invite_code=harshm11"
                contentEditable="true"
                spellCheck="false"
                type="text"
              />
              <button>Copy invite link</button>
            </div>
          </div>
          <div className="invite_topMessage">
            <div className="inviteMessageBox">
              <div className="inviteMessage">
                <img
                  src="https://lunchclub.com/static/media/private-note.02c0fab0.svg"
                  alt=""
                />
                <p>Write a message for your invites</p>
              </div>
            </div>
          </div>
        </div>
        <div className="invite_containerMiddle">
          <p className="big">Tell your friends about joining Lunchclub!</p>
          <p className="small">
            Edit the text below and tweet about joining Lunchclub
          </p>
          <div className="invite_MiddleSocial">
            <div className="inviteSocialIcons">
              <TwitterIcon color="primary" />
              <LinkedInIcon color="disabled" />
              <FacebookIcon color="disabled" />
            </div>
            <textarea name="" id="" cols="30" rows="10">
              Excited to be networking on @lunchclubai! Use my invite link to
              skip the waitlist and meet interesting people:
              https://lunchclub.com/?invite_code=harshm11
            </textarea>
          </div>
          <div className="invite_MiddleButton">
            <button>Send</button>
          </div>
        </div>
        <div className="invite_containerBottom">
          <div>
            <p>PAST INVITES (0) </p>
          </div>
          <div className="inviteBottom">
            <p>
              You haven't invited anyone yet! <br />
              Invite someone now and earn some Clubpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invite;
