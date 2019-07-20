import React from 'react';
import Baselayout from '../layouts/Baselayout';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  top: {
    paddingTop: '1rem'
  }
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Baselayout>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            Contactez-nous sur Facebook
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="center"
            className={classes.top}
          >
            Lorem ipsum dolor, onsectetur adipisicing. Quibusdam, explicabo.
            Quos molestiae quibusdam ad veritatis corporis in quas.
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Button size="small" className={classes.pos}>
              Lien Facebook
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Baselayout>
  );
};

export default Contact;
