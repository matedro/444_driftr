import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  let email = "";
  let password = "";
  let history = useHistory();
  function handleEmailChange(e) {
    email = e.target.value;
  }
  function handlePasswordChange(e) {
    password = e.target.value;
  }
  function handleLoggedIn() {
    history.push("/login");
  }
  function handleSubmit(event) {
    if (email === "child" && password === "password") {
      history.push("/c/create-profile");
    }
    if (email == "parent" && password == "password") {
      history.push("/p/evaluate");
    }
    if (email == "facilitator" && password == "password") {
      history.push("/f/matches");
    }
    if (email == "temporary" && password == "password") {
      history.push("/create-account");
    }
  }
  return (
    <body>
      <div className="log">
        <form className="field" onSubmit={handleSubmit}>
          <h1 className="text">Login</h1>
          <p>Email</p>
          <input type="text" name="email" onChange={handleEmailChange} />
          <p>Password</p>
          <input type="text" name="password" onChange={handlePasswordChange} />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </body>
  );
}
