import React from "react";
import "./chatSection.css";
import ChatBox from "./chatBox";
import DetailsBar from "./DetailsBar";
import MessageArea from "./messageArea/messageArea";
function ChatSection() {
  return (
    <>
      <div className="ChatSection">
        <div className="Details_of_Person_or__Group">
          <DetailsBar />
        </div>
        <div className="MessageArea">
          <MessageArea />   
        </div>
        <div className="ChatBox">
          <ChatBox />
        </div>
      </div>
    </>
  );
}

export default ChatSection;
