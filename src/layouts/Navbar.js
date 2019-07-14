import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar style={{ paddingTop: '1rem' }}>
          <ul className="headerMenu">
            <li>
              <Link className="headerItem" to="/">
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/lineup">
                LINE-UP
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/restauration">
                RESTAURATION
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/hebergement">
                HEBERGEMENT
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/billeterie">
                BILLETS
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/info">
                INFO-PRATIQUE
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
