import React from 'react'

function Create() {
    return (
        <div className="faciliationNewAccount">
            <header>
                <h1 className="headerLogo">Driftr</h1>
                <h1>New Account</h1>
            </header>
            <form className="faciliaitonAccountForm">
                <input type="radio" id="parent" name="accountType" value="parent"></input>
                <label for="parent">Parent</label>
                <input type="radio" id="child" name="accountType" value="child"></input>
                <label for="child">Child</label><br/>
                <label for="email">Email</label>
                <input type="email" id="email"></input><br/>
                <input type="button" id="accountCancel" value="Cancel"></input> <br/>
                <input type="submit" id="accountSubmit" value="Create Account"></input>
            </form>
        </div>
    )
}

export default Create;