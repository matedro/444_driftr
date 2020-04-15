import React from 'react';
import { useHistory } from "react-router-dom";
import './Adult.css';
import Man from './mannn.jpg';

function Adult() {
  let history = useHistory();

  function handleSave() {
    history.push("/p/evaluate");
  }

  return (
    <div className="profileAdult">
      <header>
        <h1>Parent Profile Creation</h1>
        <input type="submit" value="Logout" />
      </header>
      <img src={Man} alt="profile image" width="200" height="160" class="man"/>

      <div className="inputContainer2">

      </div>

      <div className="bigWrapper">
        <div className="inputRight">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">

          <form>
            <label>
              Age:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Interests:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Family Environment:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Extra Information:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Download Questionnaire" />
        <input type="submit" value="Upload" />
        <input type="submit" value="Save" onClick={handleSave} />
      </div>
    </div>
  );
}

export default Adult;
