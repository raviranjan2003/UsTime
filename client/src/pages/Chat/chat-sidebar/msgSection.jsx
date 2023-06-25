import React from "react";
import "./msgSection.css";
function MessageSection() {
  return (
    <>
      <div className="MsgSection">
        <div className="profile-pic-individual"></div>
        <div className="message-info">
          <div className="msg-details person-name">XYZ</div>
          <div className="msg-details latest_message">
            Hello Hi how are you?
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSection;
