import React from 'react'
import { Question as QuestionType } from '../types/types';
import { Card, Typography } from '@mui/material';

const Question = ({info}: {info: QuestionType} ) => {

  return (
    <Card>
        <Typography>
            {info.question}
        </Typography>
    </Card>
  );
};

export default Question;