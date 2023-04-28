import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  quizButton: {
    marginTop: theme.spacing(2),
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

function QuizListPage() {
  const classes = useStyles();

  const quizList = [
    { id: 1, name: 'Quantitative Aptitude I', link: '/quiz/quantitative' },
    { id: 2, name: 'CSS - I', link: '/quiz/css' },
    { id: 3, name: 'Node JS', link: '/quiz/nodejs' },
  ];

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" gutterBottom>
          Quiz List
        </Typography>
        <List>
          {quizList.map((quiz) => (
            <ListItem key={quiz.id}>
              <ListItemText primary={quiz.name} />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={quiz.link}
                className={classes.quizButton}
              >
                Start Quiz
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default QuizListPage;
