import React from 'react';
import './Adult.css';
import Man from './mannn.jpg';
import LogoutButton from '../LogoutButton'
function Adult() { return (
<div className="profileAdult">
    <header>
        <h1>Parent Profile Creation</h1>
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
    <div className="adultProfileButton">
        <input type="submit" value="Download Questionnaire" />
        <input type="submit" value="Upload" />
        <input type="submit" value="Save" />
    </div>
</div>
); } export default Adult;