// import React from 'react';

// const SignUp = () => {
// return (
// 	<div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Sign Up</h1>
// 	</div>
// );
// };

// export default SignUp;


// // *********** version 2.0*************

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     backgroundColor: theme.palette.grey[200],
//   },
//   card: {
//     minWidth: 300,
//     maxWidth: 400,
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'stretch',
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// function SignUp() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Card className={classes.card}>
//         <CardContent>
//           <form className={classes.form}>
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               className={classes.textField}
//               required
//             />
//             <TextField
//               type="email"
//               label="Email"
//               variant="outlined"
//               className={classes.textField}
//               required
//             />
//             <TextField
//               type="password"
//               label="Password"
//               variant="outlined"
//               className={classes.textField}
//               required
//             />
//             <TextField
//               type="password"
//               label="Confirm Password"
//               variant="outlined"
//               className={classes.textField}
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               className={classes.submitButton}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default SignUp;



//**********3.0************/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.grey[200],
  },
  card: {
    minWidth: 300,
    maxWidth: 400,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Sign Up
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Full Name"
              variant="outlined"
              className={classes.textField}
              required
            />
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              className={classes.textField}
              required
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              className={classes.textField}
              required
            />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              className={classes.textField}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
