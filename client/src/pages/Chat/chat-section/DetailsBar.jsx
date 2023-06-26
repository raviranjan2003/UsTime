import React from 'react'
import './DetailsBar.css'
function DetailsBar(){
    return (
        <>
            <div className="detailsBar">
                <div className="profile-pic_of_friend">
                    <img src="images/profile-pic.jpg" alt="" />
                </div>
                <div className="name_of_Person_or_group">
                    <div className="friendName">
                        <h2>Shubham</h2>
                    </div>
                </div>
                <div className="menu">
                    <img src="images/menu-bar.png" alt="" />
                </div>
            </div>
        </>
    );

}

export default DetailsBar;