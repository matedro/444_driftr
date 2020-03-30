import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';

function EvalChild() {
  return (
    <Grid container spacing={1}>
      <Grid item><ProfileSummary /></Grid>
      <Grid item><ProfileSummary /></Grid>
      <Grid item><ProfileSummary /></Grid>
      <Grid item><ProfileSummary /></Grid>
      <Grid item><ProfileSummary /></Grid>
      <Grid item><ProfileSummary /></Grid>
    </Grid>
  )
}

export default EvalChild;
