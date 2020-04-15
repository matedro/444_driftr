import React from 'react';
import Grid from "@material-ui/core/Grid";
import Filter from './Filter.js';
import ProfileSummary from './ProfileSummary.js';

function EvalParent() {
  return (
    <div>
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td><Filter /></td>
          <td>
            <Grid container spacing={1}>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
              <Grid item><ProfileSummary /></Grid>
            </Grid>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default EvalParent;