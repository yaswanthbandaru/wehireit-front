
import React, { useState } from 'react';
import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import quizListData from '../data/quizList.json';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  question: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  options: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Blog({ match }) {
  const classes = useStyles();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // getting id from the router
  const quizid = useParams(); // getting id from "/quiz/:id"
  // console.log(`id for this page is ====> ${quizid.id}`);

  // quiz questions 
  // console.log(quizListData);
  const quizQuestions = quizListData.find((p) => p.id === parseInt(quizid.id));
  // console.log(quizQuestions);
  const questionsData = quizQuestions.questions;

  
  

  const handleNextQuestion = () => {
    if (selectedOption === questionsData[currentQuestion].options.find((option) => option.isCorrect).id.toString()) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion === questionsData.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h5" align="center" className={classes.question}>
          Congratulations! You have completed the quiz.
        </Typography>
        <Typography variant="h6" align="center" className={classes.question}>
          Your score is {score} out of {questionsData.length}.
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={handleRestartQuiz} className={classes.button}>
          Restart Quiz
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" className={classes.question}>
        Question {currentQuestion + 1} of {questionsData.length}: {questionsData[currentQuestion].question}
      </Typography>
      <FormControl component="fieldset" className={classes.options}>
        <RadioGroup aria-label="quiz" name="quiz" value={selectedOption} onChange={handleOptionChange}>
          {questionsData[currentQuestion].options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id.toString()}
              control={<Radio />}
              label={option.answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className={classes.button}
      >
        {currentQuestion === questionsData.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </Button>
    </Container>
  );
}

export default Blog;
