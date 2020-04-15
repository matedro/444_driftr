import React from 'react';
import Grid from "@material-ui/core/Grid";
import Filter from './Filter.js';
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';
import LogoutButton from "./../LogoutButton";
import './Eval.css';

function EvalDetailParent(props) {
  return (
    <div>
      <LogoutButton />
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td><Filter /></td>
          <td>
            <div className="Grid">
              <Grid container spacing={1}>
                {!props.profileHandled &&
                  <Grid item>
                    <ProfileSummary
                      isChild={true}
                      name="Little Timmy"
                      age="5"
                      nationality="American"
                    />
                  </Grid>
                }
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
            </div>
          </td>
          <td>
            <ProfileDetail
              isChild={true}
              profileHandled={props.profileHandled}
              onSubmit={props.onSubmit}
            />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default EvalDetailParent;
