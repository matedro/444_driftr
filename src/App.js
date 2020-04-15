import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import ProfileSummary from "./evaluation/ProfileSummary.js";
import EvalDetailChild from "./evaluation/EvalDetailChild.js";

function App() {
  return (
    <div className="App">
      <EvalDetailChild />
    </div>
  );
}

export default App;
