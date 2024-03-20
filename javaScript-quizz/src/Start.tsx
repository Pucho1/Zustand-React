import { Button } from '@mui/material';
import React from 'react';
import { useQuestionStore } from './store/Questions';

const LIMIT_QUESTION = 5; // àra el limite de preguntas

const Start = () => {
  const fetchQuestions =  useQuestionStore(state => state.fetchQuestions); // se consume la store del state
  console.log('estas son las fetchQuestions -->', fetchQuestions);
  
  const handleQuestion = () => {
    fetchQuestions(LIMIT_QUESTION);
  }

  return (
    <Button onClick={() => handleQuestion()} variant='contained'> !Empezar..</Button>
  );
};

export default Start;
