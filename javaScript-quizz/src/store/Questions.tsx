 import { create } from 'zustand';
 import { type Question } from '../types/types';
import { devtools, persist } from 'zustand/middleware';
import confetti from 'canvas-confetti';

// Define las propiedades que va tener el estado y de que tipo son cada una.
interface State {
  questions: Question[]; // arreglo de preguntas
  currentquestions: number; // en que pregunta esta el user
  fetchQuestions : (limit: number) => Promise<void>; // permite actulizar el state
  selectedAnswer: (questionId: number, answerIndex: number) => void;
  goNextCuestion : () => void
  goPreviousCuestion : () => void
  reset : () => void
};

// usamos persis para no perder data y dev tioll para la heramientas del navegador "instalar redux devTools"
export const useQuestionStore = create<State>()(devtools( persist((set, get) => {

  // devuelve un objeto que tiene una serie de parametros y funciones que pueden modificar esos parametros
  return {
    //DATOS
    loadin: false,
    questions: [], // se inisializan los datos
    currentquestions:  0,

    // ACCIONES SOBRE LOS DATOS
    fetchQuestions : async (limit: number) => {
      const result = await fetch('http://localhost:5173/answer&Question.json');
      const jsonResult =  await result.json();

      // desordeno las preguntas y limito el numero de ellas a mostrar segun el limit
      const questions = jsonResult.sort(() => Math.random() - 0,5).slice(0, limit);
      

      // con el set se modifican los datos del store
      set({questions}, false, 'HAVE_DATA');
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
      set({questions: newQuestions}, false, 'COMPARE_RESPONSE');
    },

    goNextCuestion: () => {
      const {questions, currentquestions} = get();
      const nexQuestion = currentquestions + 1;

      if ( nexQuestion < questions.length) {
        set({currentquestions : nexQuestion}, false, 'GO_NEXT')
      }
    },

    goPreviousCuestion: () => {
      const {currentquestions} = get();
      const previousQuestion = currentquestions - 1;
      if ( previousQuestion >= 0) {
        set({currentquestions : previousQuestion}, false, 'GO_PREV')
      }
    },
    
    reset: () => {
      set({currentquestions: 0, questions: []}, false, 'RESET_DATA')
    }
  };
}, {
  name: 'question', // nopmbre del espacio en memoria
  // getStorage: () => localStorage, --------> que tipo de espacioed memoriua se debe reervar
})));
