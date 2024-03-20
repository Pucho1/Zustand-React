import React from 'react'
import { useQuestionStore } from '../store/Questions';
import Question from './Question';

const Game = () => {
  const questions = useQuestionStore(state => state.questions);
  const currentQuestions = useQuestionStore(state => state.currentquestions);

  const infoQuestion = questions[currentQuestions]; // en info guardo la pregunta actual en la que esta el user

  return (
    <>
      <Question info={infoQuestion} />
    </>
  )
};

export default Game;
