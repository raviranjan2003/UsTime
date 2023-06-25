import React from 'react'
import './chat-list.css';
import MessageSection from './msgSection';
    
function PersonList(){
    return(
        <>
        <div className="PersonList">
            <header className=""></header>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
        </div>
        </>
    );
}

export default PersonList;