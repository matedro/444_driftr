import React from "react";
import { useHistory } from "react-router-dom";
import "./LogoutButton.css";

export default function LogoutButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button className="logoutButton" onClick={handleClick}>Logout</button>
  )
}
