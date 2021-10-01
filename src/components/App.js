import React from 'react'
import { ThemeProvider } from '@mui/material/styles'

import theme from './ui/theme'
import Header from '../components/ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />      
    </ThemeProvider>
  );
}

export default App;
