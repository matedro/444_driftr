import React, { useState } from "react";
import "./homepage.css";
import logo from "./tempLogo.png";
import { useHistory } from "react-router-dom";

export default function Homepage(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/login");
  }

  return (
    <body>
      <div>
        <button className="button" onClick={handleClick}>
          Login
        </button>
        <img src={logo} alt="Driftr Logo" className="logo" />

        <h1 className="about">About Us</h1>
        <p className="background">
          Driftr is a matchmaking website that strives to facilitate the
          adoption process by helping prospective parents find children that
          will integrate well into their family.
        </p>
        <p className="background">
          Within Driftr, orphans and prospective families create profiles to
          match with each other. Both families and orphans are shown options
          based on their profiles. A match occurs when both parties express
          interest in each other. Adoption facilitators can also maintain
          accounts so that they can begin the rest of the process upon a match,
          including organizing face-to-face meetings
        </p>
        <p className="background">
          Driftr aims to instill a sense of hope for orphans and keep the
          adoption process as stress-free as possible. The service strives to
          create a natural feeling of connection between the children and
          prospective parents, allowing both the child and the parents to feel
          like they made an informed and desirable choice.
        </p>
      </div>
    </body>
  );
}
