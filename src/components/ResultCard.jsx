// import { Avatar, Box, Typography, Container, Divider, } from '@mui/material'
// import { Link } from 'react-router-dom';
// import XIcon from '@mui/icons-material/X';
// import LinkIcon from '@mui/icons-material/Link';
// import BusinessIcon from '@mui/icons-material/Business';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const ResultCard = () => {
//     return (
//         <Container  maxWidth="sm">
//             <Box sx={{bgcolor:'primary.main', p:'15px', width:{sm:'100%', md:'80%'}, color:'white', m:'auto'}} className='rounded'>
//                 <Box sx={{display:'flex', justifyContent:"space-between", p:'5px'}}>
//                     <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGuUIXd_RQm--DiUjVFSXe5yaTgcqvTHObw&s" sx={{ width: '80px', height: '80px' }} />
//                     <Box sx={{maxWidth:'150px'}}>
//                         <Typography sx={{fontWeight:'bold', mb:'7px'}}>Usaid Ahmed</Typography>
//                         <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)', mb:'7px',maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                             Frontend Developer passionate about React
//                         </Typography>
//                         <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Joined at 3454-86-8</Typography>                
//                     </Box>
//                 </Box>

//                 <Divider sx={{mt:'30px'}}/>

//                 <Box sx={{display:'flex', justifyContent:'space-between', p:"10px"}} className='rounded'> 
//                     <Link to="/repos" sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer', '&:hover':{'backgroundColor':'secondary.dark'}}} className='rounded'>
//                         <Typography sx={{color:'white'}}>Repos</Typography>
//                         <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
//                     </Link>
//                     <Link to="/followers" sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer', '&:hover':{'backgroundColor':'secondary.dark'}}} className='rounded'>
//                         <Typography sx={{color:'white'}}>Followers</Typography>
//                         <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
//                     </Link>
//                     <Link to="/following" sx={{bgcolor:'secondary.main', p:'7px', width:'90px', textAlign:'center', textDecoration:'none', cursor:'pointer', '&:hover':{'backgroundColor':'secondary.dark'}}} className='rounded'>
//                         <Typography sx={{color:'white'}}>Following</Typography>
//                         <Typography sx={{color:'white', display:'block', textAlign:'center'}}>12</Typography>
//                     </Link>
//                 </Box>

//                 <Box sx={{backgroundColor:'#12372a', p:'17px', mt:'20px'}} className='rounded'>
//                     <Box sx={{display:'flex', justifyContent:'space-between', mb:'20px'}}>
//                         <Box sx={{display:'flex', maxWidth:'45%'}}>
//                             <XIcon sx={{mr:'5px'}}/> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>my account yes gyujk   hjkg </Typography>
//                         </Box>
//                         <Box sx={{display:'flex', maxWidth:'45%'}}>
//                             <LinkIcon sx={{mr:'5px'}}/> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Turkey, istanbul uygy ne</Typography>
//                         </Box>
//                     </Box>

//                     <Box sx={{display:'flex', justifyContent:'space-between'}}>
//                         <Box sx={{display:'flex', maxWidth:'45%'}}>
//                             <LocationOnIcon sx={{mr:'5px'}}/> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>www.google.com fwe gw ygu gi</Typography>
//                         </Box>
//                         <Box sx={{display:'flex', maxWidth:'45%'}}>
//                             <BusinessIcon sx={{mr:'5px'}}/> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>mKazk je giugiug ewoihewf</Typography>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>

            

//         </Container>
//     )
//     }

// export default ResultCard
import { Avatar, Box, Typography, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from './SearchBar'
import './components.css'; // Ensure you import your CSS file

const ResultCard = () => {
    return (
        <>
            <SearchBar />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: 'primary.main', p: '15px', color: 'white', m: 'auto' }} className='rounded'>
                    <Box sx={{ display: 'flex', justifyContent: "space-between", p: '5px' }}>
                        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGuUIXd_RQm--DiUjVFSXe5yaTgcqvTHObw&s" sx={{ width: '90px', height: '90px' }} />
                        <Box sx={{ maxWidth: '150px' }}>
                            <Typography sx={{ fontWeight: 'bold', mb: '7px' }}>Usaid Ahmed</Typography>
                            <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: '7px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                Frontend Developer passionate about React
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Joined at 3454-86-8</Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ mt: '30px' }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: "10px" }} className='rounded'>
                        <Link to="/repos" className='link'>
                            <Typography>Repos</Typography>
                            <Typography sx={{ display: 'block', textAlign: 'center' }}>12</Typography>
                        </Link>
                        <Link to="/followers" className='link'>
                            <Typography>Followers</Typography>
                            <Typography sx={{ display: 'block', textAlign: 'center' }}>12</Typography>
                        </Link>
                        <Link to="/following" className='link'>
                            <Typography>Following</Typography>
                            <Typography sx={{ display: 'block', textAlign: 'center' }}>12</Typography>
                        </Link>
                    </Box>

                    <Box sx={{ backgroundColor: '#12372a', p: '17px', mt: '20px' }} className='rounded'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <XIcon sx={{ mr: '5px' }} /> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>my account yes gyujk hjkg </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <LinkIcon sx={{ mr: '5px' }} /> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Turkey, istanbul uygy ne</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <LocationOnIcon sx={{ mr: '5px' }} /> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>www.google.com fwe gw ygu gi</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <BusinessIcon sx={{ mr: '5px' }} /> <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>mKazk je giugiug ewoihewf</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default ResultCard;
