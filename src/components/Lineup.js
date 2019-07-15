import React from 'react';
import Baselayout from '../layouts/Baselayout';
import { Grid } from '@material-ui/core';

const Lineup = () => {
  return (
    <Baselayout>
      <div className="LineupWrapper">
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
          <Grid item xs={0}>
            Kamaka
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
          <Grid item xs={0}>
            Kamaka
          </Grid>
          <Grid item xs={0}>
            Roloko
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
          <Grid item xs={0}>
            Kamaka
          </Grid>
          <Grid item xs={0}>
            Roloko
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
          <Grid item xs={0}>
            Kamaka
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={0}>
            Banzai
          </Grid>
        </Grid>
      </div>
    </Baselayout>
  );
};

export default Lineup;
