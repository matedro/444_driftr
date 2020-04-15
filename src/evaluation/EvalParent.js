import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Filter from './Filter.js';
import ProfileSummary from './ProfileSummary.js';
import LogoutButton from "./../LogoutButton";
import './Eval.css';

function EvalParent() {
  let history = useHistory();

  function handleSelection() {
    history.push("/p/evaluate/detail");
  }

  return (
    <div>
      <LogoutButton />
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td><Filter /></td>
          <td>
            <Grid container spacing={1}>
              <Grid item>
                <ProfileSummary
                  isChild={true}
                  name="Little Timmy"
                  age="5"
                  nationality="American"
                  onClick={handleSelection}
                />
              </Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
              <Grid item><ProfileSummary isChild={true}/></Grid>
            </Grid>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default EvalParent;
