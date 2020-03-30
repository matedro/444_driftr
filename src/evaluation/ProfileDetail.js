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
      <h2>Little Timmy</h2>
      <p align='left'>
        Age: 5<br/>
        Nationality: American<br/>
        Gender: M<br/>
        Interests: Blocks<br/><br/><br/>
        Medical History: Great<br/>
      </p>
      <button>Accept</button>
      <button>Decline</button>
    </div>
  )
}

export default ProfileDetail;
