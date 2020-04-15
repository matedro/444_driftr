import React from 'react';
import './matches.css'
import {
    useHistory
 } from "react-router-dom"
import LogoutButton from "./../LogoutButton";

function Matches() {
    let history = useHistory();

    function handleRedirect() {
        history.push('/f/create');
    }

    return (
        <div className="faciliationMatches">
            <LogoutButton />
            <header>
                <h1 className="headerLogo">Driftr</h1>
                <h1>Match Management</h1>
            </header>
            <select name="Child" className="faciliationMatchesSelect">
                <option>Little Timmy</option>
            </select>
            <input type="button" className="facilitationMatchesNewAccountButton" value="New Account" onClick={handleRedirect}></input>
            <div className="matchesTableContainer">
                <table className="matchesTable">
                    <thead>
                        <tr>
                            <th>Parents</th>
                            <th>Objective Match</th>
                            <th>Subjective Match</th>
                            <th>Handled</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Big Timbus and Timbetta</td>
                            <td>87%</td>
                            <td>93%</td>
                            <td className="matchesTableCheckbox"><input type="checkbox"></input></td>
                        </tr>
                        <tr>
                            <td>Michael Longarms</td>
                            <td>85%</td>
                            <td>98%</td>
                            <td className="matchesTableCheckbox"><input type="checkbox"></input></td>
                        </tr>
                        <tr>
                            <td>Father 2</td>
                            <td>76%</td>
                            <td>85%</td>
                            <td className="matchesTableCheckbox"><input type="checkbox"></input></td>
                        </tr>
                        <tr>
                            <td>Mother 1</td>
                            <td>90%</td>
                            <td>68%</td>
                            <td className="matchesTableCheckbox"><input type="checkbox"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Matches;
