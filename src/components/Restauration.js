import React from 'react';
import Baselayout from '../layouts/Baselayout';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Grid, Paper } from '@material-ui/core';
import Cook1 from '../static/images/cook1.jpg';
import Cook2 from '../static/images/cook2.jpg';

const useStyles = makeStyles({
  pad: {
    padding: '2rem',
    marginBottom: '2rem'
  },
  light: {
    fontWeight: 300,
    lineHeight: 2
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Restauration = () => {
  const classes = useStyles();
  return (
    <Baselayout>
      <MediaQuery query="(min-width: 769px)">
        <Paper className={classes.pad}>
          <Grid container justify="space-around" alignItems="flex-start">
            <Grid item xs={5} justify="flex-start">
              <Typography variant="h4" align="center" gutterBottom>
                The Cooking Cooks
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                className={classes.light}
              >
                'The Cooking Cooks are Francesco and Alice, and they sell
                beautiful hand crafted Artisan fresh pasta. Their influences
                come from the vast larder of Italian and British cooking and
                they have given it a twist with their own unique, modern style.
                Some dishes you will have heard of, others are a little more
                unusual. Alice & Fancesco use only the freshest of ingredients &
                are always experimenting with seasonal ideas and different
                flavours. They have a wide range of pasta’s some super healthy,
                some gluten free, all the dough is made with tasty vegetables,
                seeds and fruits, they are magical on the eye as well as on the
                tum!'
              </Typography>
            </Grid>
            <Grid item item xs={6}>
              <img src={Cook1} className="imageRestauration" />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.pad}>
          <Grid container justify="space-around" alignItems="flex-start">
            <Grid item xs={5} justify="flex-start">
              <Typography variant="h4" align="center" gutterBottom>
                The Grillade
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                className={classes.light}
              >
                'The Cooking Cooks are Francesco and Alice, and they sell
                beautiful hand crafted Artisan fresh pasta. Their influences
                come from the vast larder of Italian and British cooking and
                they have given it a twist with their own unique, modern style.
                Some dishes you will have heard of, others are a little more
                unusual. Alice & Fancesco use only the freshest of ingredients &
                are always experimenting with seasonal ideas and different
                flavours. They have a wide range of pasta’s some super healthy,
                some gluten free, all the dough is made with tasty vegetables,
                seeds and fruits, they are magical on the eye as well as on the
                tum!'
              </Typography>
            </Grid>
            <Grid item item xs={6}>
              <img src={Cook2} className="imageRestauration" />
            </Grid>
          </Grid>
        </Paper>
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={'auto'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Cook1}
                  title="sweet cooking"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    className={classes.light}
                    align="center"
                  >
                    Goody Sleep
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="justify"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions />
            </Card>
          </Grid>
          <Grid item xs={'auto'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Cook1}
                  title="sweet cooking"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    className={classes.light}
                    align="center"
                  >
                    Tenty Sleep
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="justify"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions />
            </Card>
          </Grid>
        </Grid>
      </MediaQuery>
    </Baselayout>
  );
};

export default Restauration;
