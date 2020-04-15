import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import ProfileSummary from './ProfileSummary.js';
import LogoutButton from "./../LogoutButton";
import './Eval.css';

function EvalChild(props) {
  let history = useHistory();

  function handleSelection() {
    history.push("/c/evaluate/detail");
  }

  return (
    <div>
      <LogoutButton />
      <h1 className="Header">Profile Evaluation</h1>
      <div className="Grid">
        <Grid container spacing={1}>
          {!props.profileHandled &&
            <Grid item>
              <ProfileSummary
                isChild={false}
                name="Timbus and Timbetta"
                numParents="2"
                nationality="American"
                onClick={handleSelection}
              />
            </Grid>
          }
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
          <Grid item><ProfileSummary isChild={false}/></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default EvalChild;
