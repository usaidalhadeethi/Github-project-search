import './components.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container } from '@mui/material';

export default function CustomizedInputBase() {
    return (
        <Container maxWidth='sm'>
            <Paper
            component="form"
            sx={{ p: '12px', display: 'flex', alignItems: 'center', width:{sm:'100%', md:'80%'}, bgcolor: 'primary.main', m:'auto', mb:'20px', mt:'130px' }}
            className='css-mts'
            >
                <Box sx={{pl:'8px'}}>
                    <SearchIcon sx={{color:'white'}}/>
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
                    placeholder="Search Profie Name"
                    inputProps={{ 'aria-label': 'Search Profie Name' }}
                />
                
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button sx={{color:"white", backgroundColor:'secondary.main', '&:hover':{'backgroundColor':'#1a4b3a'}, p:'10px'}}>Search</Button>
            </Paper>
        </Container>
    );
}
