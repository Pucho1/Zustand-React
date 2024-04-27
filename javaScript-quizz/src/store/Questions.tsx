 import { create } from 'zustand';
 import { type Question } from '../types/types';
import confetti from 'canvas-confetti';

// Define las propiedades que va tener el estado y de que tipo son cada una.
interface State {
  questions: Question[]; // arreglo de preguntas
  currentquestions: number; // en que pregunta esta el user
  fetchQuestions : (limit: number) => Promise<void>; // permite actulizar el state
  selectedAnswer: (questionId: number, answerIndex: number) => void;
  goNextCuestion : () => void
  goPreviousCuestion : () => void
};

export const useQuestionStore = create<State>((set, get) => {

  // devuelve un objeto que tiene una serie de parametros y funciones que pueden modificar esos parametros   
  return {
    loadin: false,
    questions: [], // se inisializan los datos
    currentquestions:  0,

    // funcion para actulizar las preguntas, paso un numero de preguntas a mostrar
    fetchQuestions : async (limit: number) => {
      const result = await fetch('http://localhost:5173/answer&Question.json');
      const jsonResult =  await result.json();

      // desordeno las preguntas y limito el numero de ellas a mostrar segun el limit
      const questions = jsonResult.sort(() => Math.random() - 0,5).slice(0, limit);
      

      // con el set se modifican los datos del store
      set({questions});
    },

    selectedAnswer: ( questionId: number, answerIndex: number) => {
      // obtengo con el get todos los objetos de mi store 
      const { questions } = get();

      // creo una copia en profundidad
      const newQuestions = structuredClone(questions);

      // se busca el index porque se desorganizaron las preguntas
      const cuestionIndex = newQuestions.findIndex( q => q.id === questionId);

      // informacion de la pregunta 
      const questionInfo = newQuestions[cuestionIndex];

      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      
      // animacion de confetti si es la respuesta correcta
      if(isCorrectUserAnswer) confetti();


      newQuestions[cuestionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }

      // con el set actualizo cualquiera de mis propiedades que tengo en el store
      set({questions: newQuestions});
    },

    goNextCuestion: () => {
      console.log('me ejecuto')
      const {questions, currentquestions} = get();
      console.log('currentquestions', currentquestions)

      const nexQuestion = currentquestions + 1;
      console.log('nexQuestion', nexQuestion)

      if ( nexQuestion > questions.length) {
        set({currentquestions : nexQuestion})
      }
    },

    goPreviousCuestion: () => {
      const {currentquestions} = get();
      const previousQuestion = currentquestions - 1;
      if ( previousQuestion < 0) {
        set({currentquestions : previousQuestion})
      }
    }

  };
});
