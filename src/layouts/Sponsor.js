import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center'
  }
}));

const Sponsor = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ paddingTop: '3rem' }}>
      <Grid container spacing={5}>
        <Grid item xs={4} className={classes.paper}>
          <div className="sponsorItem">Sp1</div>
        </Grid>
        <Grid item xs={4} className={classes.paper}>
          <div className="sponsorItem">Sp2</div>
        </Grid>
        <Grid item xs={4} className={classes.paper}>
          <div className="sponsorItem">Sp3</div>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <div className="sponsorItem">Sp4</div>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <div className="sponsorItem">Sp5</div>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <div className="sponsorItem">Sp6</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sponsor;
