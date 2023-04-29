// import React from 'react';

// const Home = () => {
// return (
// 	<div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Welcome to GeeksforGeeks</h1>
// 	</div>
// );
// };

// export default Home;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  text: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  button: {
    fontSize: '1.5rem',
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.text}>
        WeHireIt
      </Typography>
      <Button 
	  	variant="contained" 
		color="primary" 
		className={classes.button}
		component={Link}
		to="/technology"
		>
        Get Started
      </Button>
    </div>
  );
}

export default LandingPage;
