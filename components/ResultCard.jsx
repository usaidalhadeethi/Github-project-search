import { Avatar, Box, Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const ResultCard = () => {
    return (
        <Box>  
            
            <Box sx={{bgcolor:'#436850'}}> 
                <SearchIcon/> 
                <Button color="#FBFADA">Search</Button>
            </Box>
            <Box sx={{bgcolor:'#436850'}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box>
                    <Typography>usaid ahmed</Typography>
                    <Typography variant='body2'>Joined at 3454-86-8</Typography>                
                </Box>
            </Box>

        </Box>
    )
    }

export default ResultCard
