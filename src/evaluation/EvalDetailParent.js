import React from 'react';
import Grid from "@material-ui/core/Grid";
import Filter from './Filter.js';
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';

function EvalDetailParent() {
  return (
    <div>
      <h1>Profile Evaluation</h1>
      <table>
        <tr>
          <td><Filter /></td>
          <td>
            <div styles={{height: window.innerHeight, overflowY: 'scroll'}}>
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
              </Grid>
            </div>
          </td>
          <td><ProfileDetail /></td>
        </tr>
      </table>
    </div>
  )
}

export default EvalDetailParent;
