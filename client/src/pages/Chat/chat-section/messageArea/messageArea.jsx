import React from "react";
import "./messageArea.css";
import Message from "./message";
import './chatBox.css';
import { useState } from "react";
// time

function MessageArea() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      console.log('message sent successfully');
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };
  return (
    <>
      <div className="messageArea">
        <div className="recieved-chats">
          <div className="recieved-chats-msg">
            <div className="recieved-chats-inbox">
              <p className="message">
                hi i am fine . how are u. I am waiting outside the hostel. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quaerat amet laborum expedita possimus vero id laudantium. Quasi
                voluptas animi consectetur modi! Aliquam sapiente ea ex iste
                adipisci voluptate sunt modi minus corporis qui! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odio cum, saepe
                officiis tenetur architecto voluptatum odit atque maxime
                aspernatur, quasi quisquam sed iure ipsa tempora similique
                animi? Obcaecati eaque magnam eos quisquam, accusamus delectus.
              </p>
              <span className="time" style={{ color: " rgb(192, 160, 156)" }}>
                PM | June 26
              </span>
            </div>
          </div>
          <div className="recieved-chats-img"></div>
        </div>
        <div className="outgoing-chats">
          <div className="outgoing-chats-msg">
            <div className="outgoing-chats-inbox">
              <p>
                hi i am fine . how are u. I am waiting outside the hostel. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                expedita repellat nostrum tempora blanditiis iusto a explicabo.
                Repudiandae quod temporibus amet facilis. Enim impedit deserunt
                quae repudiandae nesciunt doloremque consequatur id nulla
                aspernatur perspiciatis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error, rerum doloremque eligendi quasi, ad
                sapiente veritatis velit laudantium, optio aperiam consequuntur
                ab? Tempora voluptatem ullam repudiandae, a odit iure voluptates
                facilis aspernatur quisquam possimus.
              </p>
              <span className="time" style={{ color: " rgb(192, 160, 156)" }}>
                8:00 PM | June 26
              </span>
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
