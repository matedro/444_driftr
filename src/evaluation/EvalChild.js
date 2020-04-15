import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';

function EvalChild() {
  return (
    <div>
      <h1 className="Header">Profile Evaluation</h1>
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
    </div>
  )
}

export default EvalChild;
