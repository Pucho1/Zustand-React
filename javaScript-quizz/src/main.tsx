import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette:{
    mode: 'dark'
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
