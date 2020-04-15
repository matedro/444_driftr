import React from 'react';
import man from '../profile/mannn.jpg';
import "./Eval.css";

function ProfileDetail(props) {
  let profile;
  if (props.isChild) {
    if (props.profileHandled) { // we already handled Timmy's profile
      profile = <div>
        <h2>Undefined</h2>
        <p align='left'>
          Age: 0<br/>
          Nationality: Undefined<br/>
          Gender: N/A<br/>
          Interests: Absolutely none<br/>
          <br/>
          <br/>
          Medical History: Absent<br/>
        </p>
      </div>;
    } else { // shoe Timmy's profile
      profile = <div>
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
    }
  } else {
    if (props.profileHandled) { // we already handled Timbus & Timbetta's profile
      profile = <div>
        <h2>Undefined</h2>
        <p align='left'>
          Parents: 0<br/>
          Age: 0<br/>
          Nationality: Undefined<br/>
          Gender: N/A<br/>
          Interests: Absolutely none<br/><br/><br/>
          Family Environment: Entirely nonexistent<br/>
        </p>
      </div>;
    } else { // show Timbus & Timbetta's profile
      profile = <div>
        <h2>Timbus and Timbetta</h2>
        <p align='left'>
          Parents: 2<br/>
          Age: 30 & 32<br/>
          Nationality: American<br/>
          Gender: M & F<br/>
          Interests: Getting a child<br/><br/><br/>
          Family Environment: Great<br/>
        </p>
      </div>;
    }
  }

  return (
    <div align="center" className="Detail">
      <img
        src={man}
        className="man"
        alt="man"
        width='200'
        height='200'
      />
      {profile}

      {/* Show the "next" profile regardless of choice, we don't care */}
      <button onClick={props.onSubmit}>Accept</button>
      <button onClick={props.onSubmit}>Decline</button>
    </div>
  );
}

export default ProfileDetail;
