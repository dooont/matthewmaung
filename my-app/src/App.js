import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import React from 'react';
import {Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='lg'>
      <Navbar />
    </Container>
    </ThemeProvider>
  );
}

export default App;
