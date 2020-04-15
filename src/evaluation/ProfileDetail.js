import React from 'react';
import man from '../profile/mannn.jpg';
import "./Eval.css";

function ProfileDetail() {
  return (
    <div align="center" className="Detail">
      <img
        src={man}
        className="man"
        alt="man"
        width='200'
        height='200'
      />
      <h2>Parents Name</h2>
      <p align='left'>
        Parents: 2<br/>
        Age: 30 & 32<br/>
        Nationality: American<br/>
        Gender: M<br/>
        Interests: Getting a child<br/><br/><br/>
        Family Environment: Great<br/>
      </p>
      <button>Accept</button>
      <button>Decline</button>
    </div>
  )
}

export default ProfileDetail;
