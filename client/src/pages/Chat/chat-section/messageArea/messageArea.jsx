import React from "react";
import "./messageArea.css";
function MessageArea() {
  return (
    <>
      <div className="messageArea">
        <div className="recieved-chats">
        <div className="recieved-chats-msg"></div>
          <div className="recieved-chats-inbox">
            <p>hi i am fine . how are u. I am waiting outside the hostel </p>
            <span className="time" style={{ color: " rgb(192, 160, 156)" }}>
              8:00 PM | June 26
            </span>
          </div>
          <div className="recieved-chats-img"></div>  
        </div>
        <div className="outgoing-chats">
          <div className="outgoing-chats-msg"></div>
          <div className="outgoing-chats-inbox">
            <p>hi i am fine . how are u. I am waiting outside the hostel </p>
            <span className="time" style={{ color: " rgb(192, 160, 156)" }}>
              8:00 PM | June 26
            </span>
          </div>
          <div className="outgoing-chats-img"></div>
        </div>
      </div>
    </>
  );
}

export default MessageArea;
