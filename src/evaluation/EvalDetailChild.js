import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';

function EvalDetailChild() {
  return (
    <table>
      <tr>
        <td>
          <Grid container spacing={1}>
            <Grid item><ProfileSummary /></Grid>
            <Grid item><ProfileSummary /></Grid>
            <Grid item><ProfileSummary /></Grid>
            <Grid item><ProfileSummary /></Grid>
            <Grid item><ProfileSummary /></Grid>
            <Grid item><ProfileSummary /></Grid>
          </Grid>
        </td>
        <td><ProfileDetail /></td>
      </tr>
    </table>
  )
}

export default EvalDetailChild;
