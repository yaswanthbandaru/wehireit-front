import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
},
margin: theme.spacing(2),
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: "#f44336",
    color: "#ffff",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
  card: {
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
}));

function SignInSignUp() {
  const classes = useStyles();
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" align="center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>
        <form className={classes.form}>
        {!isSignIn && (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name">
                Name
              </InputLabel>
              <Input
                id="name"
                type="text"
                aria-describedby="name-helper-text"
              />
              <FormHelperText id="name-helper-text">
                Name
              </FormHelperText>
            </FormControl>
          )}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              Enter your email address
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="password-helper-text"
            />
            <FormHelperText id="password-helper-text">
              Enter your password
            </FormHelperText>
          </FormControl>
          {!isSignIn && (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <Input
                id="confirm-password"
                type="password"
                aria-describedby="confirm-password-helper-text"
              />
              <FormHelperText id="confirm-password-helper-text">
                Confirm your password
              </FormHelperText>
            </FormControl>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            onClick={() => {
                console.log("Submit button clicked")
            }}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        <Typography align="center">
          <Button onClick={toggleForm} color="secondary">
            {isSignIn ? "Switch to Sign Up" : "Switch to Sign In"}
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SignInSignUp;
