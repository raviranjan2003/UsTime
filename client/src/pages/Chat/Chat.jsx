import React from 'react';
import './Chat.css';
import PersonList from './chat-sidebar/person-list';
import GroupList from './chat-sidebar/group-list';
import UserOptions from './chat-sidebar/UserOptions';
import UtilityBar from './UtilityBar/utilityBar';
import ChatSection from './chat-section/chatSection';
function Chat() {
  return (
    <>
    <div className="MainPageSection">
      {/* utility bar */}
      <div className="main-page utility_bar">
        <UtilityBar/>
      </div>
      {/* sidebar */}
      <div className="main-page chat_sideBar">
        <UserOptions/>
        <PersonList/>
      </div>
      {/* chatsection */}
      <div className="main-page chatSection">
        <ChatSection/>
      </div>
      {/* group/person details */}
      <div className="main-page details_of_person_or_grp">

      </div>  
    </div>
    </>
  )
}

export default Chat;