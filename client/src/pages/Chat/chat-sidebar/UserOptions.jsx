import React from "react";
import "./UserOptions.css";
function UserOptions() {
  return (
    <>
      <section className="UserOptions">
        <div className="options profile-section">
          <div className="profile-pic">
            <img src="images/profile-pic.jpg" alt="dp" />
          </div>
          <div className="shortDetailsofUser">  
            <div className="username">Naman</div>
            <div className="user-id">#nam14532</div>
          </div>
        </div>
        <div className="options Title_of_the_Section">
          <h1>Hi! Naman </h1>
        </div>
      </section>
      <div className="options searchBar">
        <div className="search_the_exisiting_groups_or_individual">
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </>
  );
}

export default UserOptions;
