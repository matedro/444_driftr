import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import ProfileSummary from "./evaluation/ProfileSummary.js";
import EvalDetailParent from "./evaluation/EvalDetailParent.js";

function App() {
  return (
    <div className="App">
      <EvalDetailParent />
    </div>
  );
}

export default App;
