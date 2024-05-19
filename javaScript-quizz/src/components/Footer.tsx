
import React from 'react'
import { useQuestionStore } from '../store/Questions';
import { Button, Stack } from '@mui/material';

const Footer = () => {
  const  questions = useQuestionStore(state => state.questions)
  const  reset = useQuestionStore(state => state.reset)

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const {userSelectedAnswer, correctAnswer} = question;

    if ( userSelectedAnswer === correctAnswer) correct++
    else if ( userSelectedAnswer == null ) unanswered++
    else incorrect++;
  })

  return (
    <footer style={{ marginTop: "15px"}}>
      <Stack spacing={2}>
        <strong>{`Correctas ${correct}, - Incorrectas: ${incorrect} - No vista ${unanswered} `}</strong>
        <div className="reset"> <Button onClick={reset}>Reset game</Button></div>
      </Stack>
    </footer>
  )
}

export default Footer;
