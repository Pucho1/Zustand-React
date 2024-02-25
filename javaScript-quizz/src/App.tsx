import { useState } from 'react'
import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './JavascriptLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <JavaScriptLogo />
        <Typography variant='h2' component='h1'> Java Script Quitz</Typography>
      </Stack>
    </Container>
  )
};

export default App;
