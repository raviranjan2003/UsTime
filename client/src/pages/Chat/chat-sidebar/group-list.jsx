import React from 'react'
import './chat-list.css';
import MessageSection from './msgSection';

function GroupList(){
    return(
        <>
        <div className="GroupList">
            <header className="ListName">Groups</header>
            <MessageSection/>
            <MessageSection/>
        </div>
        </>
    );
}

export default GroupList;