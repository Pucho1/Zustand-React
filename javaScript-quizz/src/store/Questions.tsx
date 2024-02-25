 import { create } from 'zustand';
 import { type Question } from '../types/types';

interface State {
  questions: Question[];
  currentquestions: number;
  fetchQuestions : (limit: number) => Promise<void>;
};

export const useQuestionStore = create<State>((set) => {
  return {
    questions: [],
    currentquestions: 0,
    fetchQuestions : async (limit: number) => {
      console.log('hola');
    }
  };
});
