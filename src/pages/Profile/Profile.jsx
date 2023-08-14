import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import "./Profile.css";
import Reservations from "../../components/Reservations/Reservations";

function Profile() {
  return (
    <div className="profile-container">
      <div className="left-profile-container">
        <Reservations />
      </div>
      <div className="right-profile-container">
        <ProfileInfo />
      </div>
    </div>
  );
}

export default Profile;
