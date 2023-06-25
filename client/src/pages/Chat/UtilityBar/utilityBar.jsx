import React from "react";
import './utilityBar.css';
function UtilityBar() {
  return (
    <>
      <div className="internal_section_utility_bar">
        <img className="app-icon" src="images/UT.png" alt="" />
        <img className="notifications-symbol" src="images/notify.png" alt="" />
        <img className="group-symbol" src="images/group.png" alt="" />
        <img className="favourite-symbol" src="images/favourite.png" alt="" />
        <img className="settings-symbol" src="images/settings.png" alt="" />
        <img  className="logout-symbol" src="images/go-out.png" alt="" />
      </div>
    </>
  );
}

export default UtilityBar;
