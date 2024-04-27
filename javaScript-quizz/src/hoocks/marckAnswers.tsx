import { Question } from '../types/types';

const colorsAnswers = (info: Question, index: number) => {

const { userSelectedAnswer, correctAnswer } = info;

  if( userSelectedAnswer == null) return 'transparent';

  if( index !== correctAnswer  && index !== userSelectedAnswer) return 'transparent';

  if( index === correctAnswer ) return 'green';

  if( index === userSelectedAnswer) return 'red';

  return 'transparent';
};

export default colorsAnswers;