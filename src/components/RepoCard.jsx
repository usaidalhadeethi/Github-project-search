import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './components.css'

const RepoCard = () => {
    return (
        <Link>
                <Box sx={{bgcolor:'primary.main', display:'flex', flexDirection:'column', alignItems:'center', p:'15px'}} className="rounded">
                    <Typography variant="h5" sx={{color:'white', mb:'10px', maxWidth:'200px',overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Usaod Apysrtg</Typography>
                    <Typography variant='body2' 
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 6, // Adjust the number of lines to show
                        WebkitBoxOrient: 'vertical',
                    }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit consequatur optio dignissimos unde voluptas amet? Est, molestias, odit voluptatibus fugiat vitae ea, eum sapiente facere porro provident veritatis maiores?</Typography>
                </Box>
        </Link>

    )
}

export default RepoCard
