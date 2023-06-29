import React from 'react'
import './chatBox.css'
import './messageArea/messageArea';

function ChatBox(){
    const state = {
        receiverID: "",
        messageText: null,
        groupMessage: [],
        user: {},
        isAuthenticated: true
      };

    function sendMessage(){
    }
    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    }
    function handleChange(e){
        e.setState({messageText:e.target.value});
    }
    return (
        <>
            <div className="chatBox">
                <img className="emojis" src="images/emoji.png" alt="" />
                <img className="attachments" src="images/attachments.png" alt="" />
                <div className="typingArea">
                    <input type="text" placeholder='Type Here' onChange={handleChange}/>
                    <img className="sendBtn" src="images/sendBtn.png" alt="" onClick={handleSubmit}/>
                </div>
                <img className="voiceRecord" src="images/voice-record.png" alt=""/>
            </div>
        </>
    );
}

export default ChatBox;