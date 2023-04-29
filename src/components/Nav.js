import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    flexGrow: 1,
  },
  appbar: {
    // backgroundColor: "aqua",
  },link: {
    color: "white",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>WeHireIt</Link>
        </Typography>
        <Link to="/" className={classes.link}>
            <Button color="inherit">Home</Button>
        </Link>
        <Link to="/technology" className={classes.link}>
            <Button color="inherit">Technology</Button>
        </Link>
        <Link to="/contests" className={classes.link}>
            <Button color="inherit">Contests</Button>
        </Link>
        {/* <Link to="/blogs" className={classes.link}>
            <Button color="inherit">Blog</Button>
        </Link> */}
        <Link to="/sign-up" className={classes.link}>
            <Button color="inherit">Sign up / Sign in</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
