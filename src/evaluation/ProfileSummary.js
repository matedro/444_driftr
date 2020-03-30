import React from 'react';
import logo from "../logo.svg";

function ProfileSummary() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Big Timbus and Timbetta
      </p>
      <p>
        Parents: 2<br />
        Nationality: US
      </p>
    </div>
  )
}

export default ProfileSummary;
