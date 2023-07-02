import React from "react";
import "./messageArea.css";
import "./chatBox.css";
import { useState } from "react";

function MessageArea() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        timestamp: new Date().getTime(),
      };

      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const formatTimestamp = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric"
    };
    return new Date(timestamp).toLocaleString(undefined, options);
  };
  return (
    <>
      <div className="messageArea">
        <div className="mainMessageArea">
        {messages.map((message, index = 0) => (
          <div className="message-container">
            <div className="text">
            <span className="message-text">{message.text}</span>
            </div>
            <span className="message-timestamp">
              {formatTimestamp(message.timestamp)}  
            </span>
          </div>
        ))}
        </div>
      </div>
      <div className="chatBox">
        <img className="emojis" src="images/emoji.png" alt="" />
        <img className="attachments" src="images/attachments.png" alt="" />
        <div className="typingArea">
          <input
            type="text"
            placeholder="Type a message"
            value={inputValue}
            onChange={handleInputChange }
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
