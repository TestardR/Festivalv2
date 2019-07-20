import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Baselayout from '../layouts/Baselayout';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import LineupBase from './images/lineupBase.jpg';
import LineupSky from './images/lineupSky.jpg';
import LineupHotdog from './images/lineupHotdog.jpg';
import LineupWar from './images/lineupWar.jpg';
import LineupHippy from './images/lineupHippy.jpg';

const useStyles = makeStyles({
  bigAvatar: {
    width: '28rem',
    height: '28rem',
    border: '2px solid white'
  }
});

const Lineup = () => {
  const [imgSrc, setImgSrc] = useState(LineupBase);
  const classes = useStyles();

  const handleMouseOver = src => {
    setImgSrc(src);
  };

  const handleMouseOut = () => {
    setImgSrc(LineupBase);
  };

  return (
    <Baselayout>
      <MediaQuery query="(min-width: 769px)">
        <Grid container justify="space-between" spacing={4}>
          <Grid item className="LineupWrapper">
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupSky)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHotdog)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Kamaka
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHippy)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Kamaka
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHotdog)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Roloko
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHotdog)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Kamaka
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Roloko
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHippy)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Roloko
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHippy)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Kamaka
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHotdog)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Roloko
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupHotdog)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Kamaka
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
              <Grid
                item
                xs={'auto'}
                onMouseOver={() => handleMouseOver(LineupWar)}
                onMouseOut={() => handleMouseOut()}
                className="lineupItem"
              >
                Banzai
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Avatar
              src={imgSrc}
              alt="lineup Image"
              className="lineupImage"
              className={classes.bigAvatar}
            />
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <div className="LineupWrapper">
          <Grid container spacing={0} justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
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
          <Grid container spacing={2} justify="center">
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
          <Grid container spacing={1} justify="center">
            <Grid item xs={'auto'}>
              Banzai
            </Grid>
            <Grid item xs={'auto'}>
              Kamaka
            </Grid>
          </Grid>
          <Grid container spacing={0} justify="center">
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
