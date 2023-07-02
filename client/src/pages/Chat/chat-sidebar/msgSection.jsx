import React from "react";
import "./msgSection.css";
function MessageSection({name,message}) {

  return (
    <>
      <div className="MsgSection">
        <div className="profile-pic-individual"></div>
        <div className="message-info">
          <div className="msg-details person-name">{name}</div>
          <div className="msg-details latest_message">
              {message}
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSection;
