import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';

function EvalDetailChild() {
  return (
    <div>
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td>
            <div className="Grid">
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
            </div>
          </td>
          <td><ProfileDetail /></td>
        </tr>
      </table>
    </div>
  )
}

export default EvalDetailChild;
