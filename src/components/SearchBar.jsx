import './components.css';
import { useContext, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container } from '@mui/material';
import ResultCard from './ResultCard';
import { SearchContext } from '../assets/Context/SearchContext';

export default function SearchBar() {
    const { searchInput, setSearchInput } = useContext(SearchContext);
    const [showResult, setShowResult] = useState(false);

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchClick = () => {
        setShowResult(true);
    };

    return (
        <Container maxWidth='sm'>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                <Paper
                    component="form"
                    sx={{ p: '12px', display: 'flex', alignItems: 'center', bgcolor: 'primary.main', m: 'auto', mb: '20px', mt: '100px' }}
                    className='css-mts'
                >
                    <Box sx={{ pl: '8px' }}>
                        <SearchIcon sx={{ color: 'white' }} />
                    </Box>

                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: 'white',
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(255, 255, 255, 0.8)',
                            },
                        }}
                        placeholder="Search Profile Name"
                        inputProps={{ 'aria-label': 'Search Profile Name' }}
                        value={searchInput}
                        onChange={handleInputChange}
                    />

                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <Button
                        sx={{ color: "white", backgroundColor: 'secondary.main', '&:hover': { 'backgroundColor': 'secondary.dark' }, p: '10px' }}
                        disabled={searchInput === ''}
                        onClick={handleSearchClick}
                    >
                        Search
                    </Button>
                </Paper>
                <ResultCard showResult={showResult} />
            </Box>
        </Container>
    );
}
