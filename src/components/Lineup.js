import React from 'react';
import MediaQuery from 'react-responsive';
import Baselayout from '../layouts/Baselayout';
import { Grid } from '@material-ui/core';

const Lineup = () => {
  return (
    <Baselayout>
      <MediaQuery query="(min-width: 769px)">World</MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <div className="LineupWrapper">
          <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
            <Grid item xs={'auto'}>
              Roloko
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
            <Grid item xs={'auto'}>
              Roloko
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
          </Grid>
          <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
          </Grid>
        </div>
      </MediaQuery>
    </Baselayout>
  );
};

export default Lineup;
