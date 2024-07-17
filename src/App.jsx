import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ResultCard from './components/ResultCard';
import SearchBar from './components/SearchBar'
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#436850',
    },
    secondary: {
      main: '#12372A',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchBar/>
        <ResultCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
