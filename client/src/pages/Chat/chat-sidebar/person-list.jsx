import React from 'react'
import './chat-list.css';
import MessageSection from './msgSection';
    
function PersonList({name,messsage}){
    return(
        <>
        <div className="PersonList">
            <header className=""></header>
            <MessageSection name ={name} message={messsage}/>
            <MessageSection/>
            <MessageSection/>
            <MessageSection/>
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