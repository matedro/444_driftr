import React from 'react';
import man from "../profile/mannn.jpg";
import "./Eval.css";

function ProfileSummary() {
  return (
    <div className="Summary">
      <table>
        <tr>
          <td>
            <img
              src={man}
              className="man"
              alt="man" w
              dth='50'
              height='50'
            />
          </td>
          <td><label>Parents Name</label></td>
        </tr>
      </table>
      <p align='left'>
        Parents: 2<br/>
        Nationality: American
      </p>
    </div>
  )
}

export default ProfileSummary;
