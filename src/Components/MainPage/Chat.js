import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
function Chat() {
  return (
    <div className="chat">
      <div className="chatContainer">
        <div className="chatBox">
          <p className="chatBoxContainer">
            <p>Chat with users you meet on Lunchclub!</p>
            <Link to="/main">
              <a>
                <span>Sign up for a meeting!</span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
