import { Avatar, Box, Typography, Container, Link, Divider } from '@mui/material'

const ResultCard = () => {
    return (
        <Container  maxWidth="sm">
            <Box sx={{bgcolor:'primary.main', p:'15px', width:{sm:'100%', md:'80%'}, color:'white', m:'auto'}} className='rounded'>
                <Box sx={{display:'flex', justifyContent:"space-between", p:'5px'}}>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGuUIXd_RQm--DiUjVFSXe5yaTgcqvTHObw&s" sx={{ width: '80px', height: '80px' }} />
                    <Box sx={{maxWidth:'150px'}}>
                        <Typography sx={{fontWeight:'bold', mb:'7px'}}>Usaid Ahmed</Typography>
                        <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)', mb:'7px',maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            Frontend Developer passionate about React
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Joined at 3454-86-8</Typography>                
                    </Box>
                </Box>

                <Divider sx={{mt:'30px'}}/>

                <Box sx={{display:'flex', justifyContent:'space-between', p:"10px"}} className='rounded'> 
                    <Link sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer'}} className='rounded'>
                        <Typography sx={{color:'white'}}>Repos</Typography>
                        <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
                    </Link>
                    <Link sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer'}} className='rounded'>
                        <Typography sx={{color:'white'}}>Followers</Typography>
                        <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
                    </Link>
                    <Link sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer'}} className='rounded'>
                        <Typography sx={{color:'white'}}>Followers</Typography>
                        <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
                    </Link>
                    
                    
                </Box>
            </Box>

            

        </Container>
    )
    }

export default ResultCard
