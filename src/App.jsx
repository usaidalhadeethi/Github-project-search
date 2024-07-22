import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RepoCardList from './components/RepoCardList';
import FollowersCardList from './components/FollowersCardList';
import FollowingCardList from './components/FollowingCardList';
import { SearchContext } from './assets/Context/SearchContext';
import { useState } from 'react';

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
    const [searchInput, setSearchInput] = useState('');

    return (
        <SearchContext.Provider value={{ searchInput, setSearchInput }}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<SearchBar />} />
                        <Route path="/repos" element={<RepoCardList />} />
                        <Route path="/followers" element={<FollowersCardList />} />
                        <Route path="/following" element={<FollowingCardList />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </SearchContext.Provider>
    );
}

export default App;
