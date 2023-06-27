import React from "react";
import './utilityBar.css';
function UtilityBar() {
  return (
    <>
      <div className="internal_section_utility_bar">
        <img className="utility app-icon" src="images/UT.png" alt="" />
        <img className="utility notifications-symbol" src="images/notify.png" alt="" />
        <img className="utility group-symbol" src="images/group.png" alt="" />
        <img className="utility favourite-symbol" src="images/favourite.png" alt="" />
        <img className=" utility settings-symbol" src="images/settings.png" alt="" />
        <img  className="utility logout-symbol" src="images/go-out.png" alt="" />
      </div>
    </>
  );
}

export default UtilityBar;
