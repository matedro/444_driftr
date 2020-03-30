import React from 'react';
import "./Eval.css"

function Filter() {
  return (
    <div className="Filter">
      <h2>Filters</h2>
      <div align="left">
        <label>Age: <input size={2} /> - <input size={2} /></label>
        <label>Nationality: </label>
        <select>
          <option value="">Select one...</option>
        </select>
        <br/>
        <input type="checkbox" name="male" />
        <label for="male">M</label>
        <input type="checkbox" name="female" />
        <label for="female">F</label>
      </div>
    </div>
  )
}

export default Filter;
