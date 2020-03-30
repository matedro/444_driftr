import React, { useState } from "react";
import "./login.css";
export default function Login(props) {
  function handleSubmit(event) {}

  return (
    <body>
      <div className="log">
        <form className="field">
          <h1 className="text">Login</h1>
          <p>Email</p>
          <input type="text" name="email" />
          <p>Password</p>
          <input type="text" name="password" />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </body>
  );
}
