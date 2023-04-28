// import React, { useState, useEffect } from 'react';
// import React from 'react';

// const Contests = () => {
// return (
// 	<div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Welcome to Contests</h1>
// 	</div>	
	
// );
// };

// export default Contests;

import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

function ContestPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h3" align="center">
              Quiz Contest
            </Typography>
          </Paper>
        </Grid>

        {/* Quiz Questions */}
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">
              Question 1: What is the capital of France?
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup aria-label="question1" name="question1">
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Paris"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Madrid"
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="Berlin"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">
              Question 2: What is the capital of Japan?
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup aria-label="question2" name="question2">
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Beijing"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Seoul"
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="Tokyo"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Paper>
            <Button variant="contained" color="primary">
              Submit Quiz
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContestPage;
