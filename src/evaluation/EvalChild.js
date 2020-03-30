import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';

function EvalChild() {
  return (
    <div>
      <h1>Profile Evaluation</h1>
      <Grid container spacing={1}>
        <Grid item><ProfileSummary /></Grid>
        <Grid item><ProfileSummary /></Grid>
        <Grid item><ProfileSummary /></Grid>
        <Grid item><ProfileSummary /></Grid>
        <Grid item><ProfileSummary /></Grid>
        <Grid item><ProfileSummary /></Grid>
      </Grid>
    </div>
  )
}

export default EvalChild;
