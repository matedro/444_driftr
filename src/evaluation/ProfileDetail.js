import React from 'react';
import man from '../profile/mannn.jpg';
import "./Eval.css";

function ProfileDetail(props) {
  let childProfile = <div>
    <h2>Little Timmy</h2>
    <p align='left'>
      Age: 5<br/>
      Nationality: American<br/>
      Gender: M<br/>
      Interests: Blocks<br/>
      <br/>
      <br/>
      Medical History: Great<br/>
    </p>
  </div>;

  let parentProfile = <div>
    <h2>Timbus and Timbetta</h2>
    <p align='left'>
      Parents: 2<br/>
      Age: 30 & 32<br/>
      Nationality: American<br/>
      Gender: M<br/>
      Interests: Getting a child<br/><br/><br/>
      Family Environment: Great<br/>
    </p>
  </div>;


  return (
    <div align="center" className="Detail">
      <img
        src={man}
        className="man"
        alt="man"
        width='200'
        height='200'
      />
      {
        props.isChild
          ? childProfile
          : parentProfile
      }

      <button>Accept</button>
      <button>Decline</button>
    </div>
  )
}

export default ProfileDetail;
