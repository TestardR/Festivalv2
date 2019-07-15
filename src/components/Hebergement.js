import React from 'react';
import Baselayout from '../layouts/Baselayout';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Sleep1 from '../static/images/cards/cook1.jpg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  light: {
    fontWeight: 400
  }
});

const Hebergement = () => {
  const classes = useStyles();
  return (
    <Baselayout>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={'auto'}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Sleep1}
                title="sweet cooking"
              />
              <CardContent>
                <Typography variant="h6" className={classes.light}>
                  Goody Sleep
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
                image={Sleep1}
                title="sweet cooking"
              />
              <CardContent>
                <Typography variant="h6" className={classes.light}>
                  Tenty Sleep
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions />
          </Card>
        </Grid>
      </Grid>
    </Baselayout>
  );
};

export default Hebergement;
