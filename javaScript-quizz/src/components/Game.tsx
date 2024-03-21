import React from 'react'
import { useQuestionStore } from '../store/Questions';
import Question from './Question';


// muestro las questions
const Game = () => {
  const questions = useQuestionStore(state => state.questions); // optengo las question del store
  const currentQuestions = useQuestionStore(state => state.currentquestions); // optengo el indice de la pregunta en la que estoy

  const infoQuestion = questions[currentQuestions]; // en info guardo la pregunta actual en la que esta el user

  return (
    <>
      <Question info={infoQuestion} />
    </>
  )
};

export default Game;
