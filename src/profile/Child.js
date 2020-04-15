import React from 'react';
import './Child.css';
import Man from './mannn.jpg';
import LogoutButton from '../LogoutButton';

function Child() {return (
<div className="profileChild">
    <header>
        <h1>Child Profile Creation</h1>
        <LogoutButton />
    </header>
    <div className="inputContainer2">
    <img src={Man} alt="profile image" width="200" height="160" class="man"/>
    <br />
    <input type="button" value="Upload"></input>
    <input type="button" value="Clear"></input>
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
    <div className="childProfileButton">
        <input type="submit" value="Save" />
    </div>
</div>
); } export default Child;