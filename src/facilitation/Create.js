import React from 'react'
import './create.css'
import {
    useHistory
} from "react-router-dom";
import LogoutButton from "./../LogoutButton";

function Create() {
    let history = useHistory();

    function handleCancel() {
        history.push("/f/matches");
    }

    function handleSubmit() {
        history.push("/f/matches");
    }

    return (
        <div className="faciliationNewAccount">
            <LogoutButton />
            <header>
                <h1 className="headerLogo">Driftr</h1>
                <h1>New Account</h1>
            </header>
            <form className="faciliaitonAccountForm">
                <input type="radio" id="parent" name="accountType" value="parent" className="newAccountRadio"></input>
                <label for="parent" className="newAccountRadioLabel">Parent</label>
                <input type="radio" id="child" name="accountType" value="child" className="newAccountRadio"></input>
                <label for="child" className="newAccountRadioLabel">Child</label><br/>
                <label for="email" className="newAccountLabel">Email</label>
                <input type="email" id="email"></input><br/>
                <input type="button" id="accountCancel" className="newAccountButton" value="Cancel" onClick={handleCancel}></input>
                <input type="submit" id="accountSubmit" className="newAccountButton" value="Create Account" onClick={handleSubmit}></input>
            </form>
        </div>
    )
}

export default Create;
