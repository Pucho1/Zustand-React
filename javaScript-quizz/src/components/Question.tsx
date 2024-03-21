import { Question as QuestionType } from '../types/types';
import { Card, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';



const Question = ({info}: {info: QuestionType} ) => {
  console.log('esta es la info ====>', info)

  return (
    <Card>
      <Typography>
        {info?.question}
      </Typography>
      <SyntaxHighlighter language='jabvascrit' style={gradientDark} >
        {info?.code ? info?.code : 'no tien dfata el code' }
      </SyntaxHighlighter>
    </Card>
  );
};

export default Question;