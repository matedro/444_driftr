import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';
import LogoutButton from "./../LogoutButton";
import './Eval.css';

function EvalDetailChild() {
  return (
    <div>
      <LogoutButton />
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td>
            <div className="Grid">
              <Grid container spacing={1}>
                <Grid item>
                  <ProfileSummary
                    isChild={false}
                    name="Timbus and Timbetta"
                    numParents="2"
                    nationality="American"
                  />
                </Grid>
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
          </td>
          <td><ProfileDetail isChild={false}/></td>
        </tr>
      </table>
    </div>
  )
}

export default EvalDetailChild;
