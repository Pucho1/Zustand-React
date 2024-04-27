import './App.css';
import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './JavascriptLogo';
import Start from './Start';
import { useQuestionStore } from './store/Questions';
import Game from './components/Game';


// aqui decido que se visualiza por ahoa 
function App() {
  const questions =  useQuestionStore(state => state.questions); // asi se consume la store del state 
  console.log('estas son las questions -->', questions);

  return (
    <Container maxWidth="sm">
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'> {/** ventajas de MUI se pueden meter estilos en linea */}
        <JavaScriptLogo />
        <Typography variant='h2' component='h1'> Java Script Quizz</Typography>
      </Stack>

      {questions.length > 0 ? <Game /> : <Start />}
    </Container>
  );
};

export default App;
