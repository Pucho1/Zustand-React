
import React from 'react'
import { useQuestionStore } from '../store/Questions';

const Footer = () => {
  const  questions = useQuestionStore(state => state.questions)

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
      <strong>{`Correctas ${correct}, - Incorrectas: ${incorrect} - No vista ${unanswered} `}</strong>
    </footer>
  )
}

export default Footer;
