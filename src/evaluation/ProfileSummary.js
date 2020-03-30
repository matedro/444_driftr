import React from 'react';
import man from "../profile/mannn.jpg";

function ProfileSummary() {
  return (
    <div>
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
          <td><label>Little Timmy</label></td>
        </tr>
      </table>
      <p align='left'>
        Age: 5<br/>
        Nationality: American
      </p>
    </div>
  )
}

export default ProfileSummary;
