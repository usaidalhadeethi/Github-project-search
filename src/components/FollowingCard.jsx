import { Avatar, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './components.css'

const FollowingCard = () => {
    return (
        <Link>
                <Box sx={{bgcolor:'primary.main', display:'flex', flexDirection:'column', alignItems:'center'}} className="rounded">
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGuUIXd_RQm--DiUjVFSXe5yaTgcqvTHObw&s" sx={{ width: '80px', height: '80px', mt:'15px' }} />
                    <Typography sx={{color:'white', my:'15px', maxWidth:'200px',overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Usaod Apysrtg</Typography>
                </Box>
        </Link>

    )
}

export default FollowingCard
