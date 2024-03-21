 import { create } from 'zustand';
 import { type Question } from '../types/types';


// Define las propiedades que va tener el estado y de que tipo son cada una.
interface State {
  questions: Question[]; // arreglo de preguntas
  currentquestions: number; // en que pregunta esta el user
  fetchQuestions : (limit: number) => Promise<void>; // permite actulizar el state
};

export const useQuestionStore = create<State>((set) => {
  return {
    questions: [], // se inisializan los datos
    currentquestions:  0,

    // funcion para actulizar las preguntas, paso un numeo de preguntas a mostrar
    fetchQuestions : async (limit: number) => {
      const result = await fetch('http://localhost:5173/answer&Question.json');
      const jsonResult =  await result.json();

      // desordeno las preguntas y limito el numero de ellas a mostrar segun el limit
      const questions = jsonResult.sort(() => Math.random() - 0,5).slice(0, limit);
      

      // con el set se modifican los datos del store
      set({questions});
    }
  };
});
