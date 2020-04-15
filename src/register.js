import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";
export default function Register(props) {
  let history = useHistory();
  function handleSubmit(event) {
    history.push("/p/create-profile");
  }

  return (
    <body>
      <h1 className="text">Driftr</h1>

      <hr />
      <br />

      <h2 className="background">
        Welcome to Driftr! You have been granted access to this site by an
        authorized adoption facilitator. Please create a username and password
        for your new account.
      </h2>
      <div className="log">
        <form className="field" onSubmit={handleSubmit}>
          <p>Username</p>
          <input type="text" name="email" />
          <p>Password</p>
          <input type="text" name="password" />
          <p>Confirm Password</p>
          <input type="text" name="password" />
          <br />
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    </body>
  );
}
