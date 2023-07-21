import React from "react";
import "./messageArea.css";
import "./chatBox.css";
import { useEffect, useState } from "react";

function MessageArea() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const socket = new  WebSocket('http://localhost:3000/')
  socket.addEventListener('message', (event) => {
    setMessages([...messages, newMessage]);
    setMessageInput("");
  });
    return () => {
      socket.close();
    };
  }, [])

  const sendMessage = () => {
    if (messageInput.trim() === '') return;
    const newMessage = {
      content: messageInput,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages,newMessage]);
    const socket = new WebSocket('ws://localhost:3000');
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify(newMessage));
      setMessageInput('');
    });
  };

  const handleKeyPress = (event) =>{
    if(event.key === 'Enter'){
      sendMessage();
      setMessageInput("");
    }
  }
  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
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
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
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
