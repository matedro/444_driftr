import React from 'react';
import { useHistory } from 'react-router-dom';
import './Child.css';
import Man from './mannn.jpg';

function Child() {
  let history = useHistory();

  function handleSave() {
    history.push("/c/evaluate");
  }

  return (
    <div className="profileChild">
      <header>
        <h1>Child Profile Creation</h1>
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
              Gender:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Medical History:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Sexual Orientation:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="inputRight">
          <form>
            <label>
              Nationality:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Save" />
      </div>
    </div>
  );
}

export default Child;
