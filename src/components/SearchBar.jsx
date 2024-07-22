import './components.css'
import { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container } from '@mui/material';
import ResultCard from './ResultCard';

export default function CustomizedInputBase() {
    const [searchInput, setSearchInput] = useState('');
    const [showResult, setShowResult] = useState(false);

    function handleInputChange(e) {
        setSearchInput(e.target.value);
    }

    function handleSearchClick() {
        setShowResult(true);
    }

    return (
        <Container maxWidth='sm'>
            <Box sx={{width:{xs:'100%', md:'90%'}}}>

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
                                color: 'rgba(255, 255, 255, 0.8)'
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
                <ResultCard searchInput={searchInput} showResult={showResult} />
            </Box>
        </Container>
    );
}
