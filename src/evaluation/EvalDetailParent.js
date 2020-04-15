import React from 'react';
import Grid from "@material-ui/core/Grid";
import Filter from './Filter.js';
import ProfileSummary from './ProfileSummary.js';
import ProfileDetail from './ProfileDetail.js';
import './Eval.css';

function EvalDetailParent() {
  return (
    <div>
      <h1 className="Header">Profile Evaluation</h1>
      <table>
        <tr>
          <td><Filter /></td>
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

export default EvalDetailParent;
