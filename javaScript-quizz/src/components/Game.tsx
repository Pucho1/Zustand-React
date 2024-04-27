import React from 'react'
import { useQuestionStore } from '../store/Questions';
import Question from './Question';
import { IconButton, Stack } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';


// muestro las questions
const Game = () => {
  const questions = useQuestionStore(state => state.questions); // optengo las question del store
  const currentQuestions = useQuestionStore(state => state.currentquestions); // optengo el indice de la pregunta en la que estoy
  const goNextCuestion = useQuestionStore(state => state.goNextCuestion); // optengo el indice de la pregunta en la que estoy
  const goPreviousCuestion = useQuestionStore(state => state.goPreviousCuestion); // optengo el indice de la pregunta en la que estoy
  
  
  const infoQuestion = questions[currentQuestions]; // en info guardo la pregunta actual en la que esta el user

  return (
    <>
    <Stack direction={'row'} gap={'2'} alignItems={'center'} justifyContent={'center'}>
      <IconButton onClick={goPreviousCuestion} disabled={currentQuestions === 0}>
        <ArrowBackIosNew />
      </IconButton>

      <IconButton onClick={goNextCuestion} disabled={currentQuestions > questions.length - 1}>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
      <Question info={infoQuestion} />
    </>
  )
};

export default Game;
