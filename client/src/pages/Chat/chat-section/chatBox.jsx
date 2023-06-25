import React from 'react'
import './chatBox.css'
function ChatBox(){
    return (
        <>
            <div className="chatBox">
                <img className="emojis" src="images/emoji.png" alt="" />
                <img className="attachments" src="images/attachments.png" alt="" />
                <div className="typingArea">
                    <input type="text" placeholder='Type Here'/>
                </div>
                <img className="voiceRecord" src="images/voice-record.png" alt=""/>
            </div>
        </>
    );
}

export default ChatBox;