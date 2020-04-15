import React from 'react';
import man from "../profile/mannn.jpg";
import "./Eval.css";

function ProfileSummary(props) {
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
          <td>
            <label>{props.name ? props.name : "Undefined"}</label>
          </td>
        </tr>
      </table>
      <p align='left'>
        {props.isChild ? "Age: " : "Parents: "}
        {props.isChild
          ? (props.age ? props.age : "0")
          : (props.numParents ? props.numParents : "0")
        }<br/>
        Nationality: {props.nationality ? props.nationality : "Undefined"}
      </p>
    </div>
  )
}

export default ProfileSummary;
