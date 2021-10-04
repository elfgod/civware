import React from 'react'
// import { ThemeProvider } from '@material-ui/core'
import { ThemeProvider } from '@mui/system'

import theme from './ui/Theme'
import Header from './ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />      
    </ThemeProvider>
  );
}

export default App;
