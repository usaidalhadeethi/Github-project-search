// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import ResultCard from './components/ResultCard';
// import SearchBar from './components/SearchBar'
// import './App.css';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#436850',
//     },
//     secondary: {
//       main: '#12372A',
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <SearchBar/>
//         <ResultCard />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ResultCard from './components/ResultCard';
import FollowersCardsList from './components/FollowersCardsList';
import FollowingCardsList from './components/FollowingCardsList';
import './App.css';
import RepoCardsList from './components/RepoCardsList';

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
            <Router>
                <Container>
                    <Routes>
                        <Route path="/" element={<ResultCard />} />
                        <Route path="/followers" element={<FollowersCardsList />} />
                        <Route path="/following" element={<FollowingCardsList />} />
                        <Route path="/repos" element={<RepoCardsList />} />
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;

