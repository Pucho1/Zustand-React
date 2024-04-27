import { Question as QuestionType } from '../types/types';
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useQuestionStore } from '../store/Questions';
import colorsAnswers from '../hoocks/marckAnswers';



const Question = ({info}: {info: QuestionType} ) => {
  console.log('esta es la info ====>', info)
  const selectAnswer = useQuestionStore(state => state.selectedAnswer)

  const createHandleClick = (index: number) => () => {
    selectAnswer(info.id, index)
  }
  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left'}}>
      <Typography>
        {info?.question}
      </Typography>
      <SyntaxHighlighter language='javascript' style={gradientDark} >
        {info?.code ? info?.code : 'no tien data el code' }
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#333'}} disablePadding>

      {info.answers.map((answers, index) => (
        <ListItem key={index} disablePadding divider>
          <ListItemButton
            onClick={ createHandleClick(index)}
            sx={{ backgroundColor: colorsAnswers(info, index)}}
          >
            <ListItemText primary={answers} sx={{ textAlign: 'center'}}/>
          </ListItemButton>
        </ListItem>
      ))}

      </List>
    </Card>
  );
};

export default Question;