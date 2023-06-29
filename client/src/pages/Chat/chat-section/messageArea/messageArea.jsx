import React from "react";
import "./messageArea.css";
import "./chatBox.css";
import { useState } from "react";
// time

function MessageArea() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      console.log("message sent successfully");
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };
  return (
    <>
      <div className="messageArea">
        <div className="recieved-chats">
          <div className="recieved-chats-msg">
            <div className="recieved-chats-inbox">
                {messages.map((message, index) => (
                  <div key={index} className="message-container">
                    <span className="message-text">{message.text}</span>
                    <span className="message-timestamp">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="recieved-chats-img"></div>
        </div>
        <div className="outgoing-chats">
          <div className="outgoing-chats-msg">
            <div className="outgoing-chats-inbox">
              {messages.map((message, index) => (
                <div key={index} className="message-container">
                  <span className="message-text">{message.text}</span>
                  <span className="message-timestamp">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="outgoing-chats-img"></div>
        </div>
      </div>
      <div className="chatBox">
        <img className="emojis" src="images/emoji.png" alt="" />
        <img className="attachments" src="images/attachments.png" alt="" />
        <div className="typingArea">
          <input
            type="text"
            placeholder="Type Here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <img
            className="sendBtn"
            src="images/sendBtn.png"
            alt=""
            onClick={sendMessage}
          />
        </div>
        <img className="voiceRecord" src="images/voice-record.png" alt="" />
      </div>
    </>
  );
}

export default MessageArea;
