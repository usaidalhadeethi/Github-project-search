import { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Typography, Divider } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { SearchContext } from '../assets/Context/SearchContext';
import './components.css';

const ResultCard = ({ showResult }) => {
    const { searchInput } = useContext(SearchContext);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (showResult) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${searchInput}`, true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setUserData(JSON.parse(xhr.responseText));
                    setError('');
                } else if (xhr.status === 404) {
                    setUserData(null);
                    setError('User not found');
                } else if (xhr.status === 403) {
                    setUserData(null);
                    setError('Rate limit exceeded');
                } else {
                    setUserData(null);
                    setError('An error occurred');
                }
            };
            xhr.onerror = () => {
                setUserData(null);
                setError('An error occurred');
            };
            xhr.send();
        }
    }, [searchInput, showResult]);

    if (!showResult) return null;

    return (
        <Box sx={{ bgcolor: 'primary.main', p: '15px', color: 'white', m: 'auto' }} className='rounded'>
            {error ? (
                <Typography sx={{ color: 'red' }}>{error}</Typography>
            ) : userData ? (
                <>
                    <Box sx={{ display: 'flex', justifyContent: "space-between", p: '5px' }}>
                        <Avatar alt={userData.login} src={userData.avatar_url} sx={{ width: '90px', height: '90px' }} />
                        <Box sx={{ maxWidth: '150px' }}>
                            <Typography sx={{ fontWeight: 'bold', mb: '7px' }}>{userData.login}</Typography>
                            <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: '7px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {userData.bio || 'No bio available'}
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                Joined on {new Date(userData.created_at).toLocaleDateString()}
                            </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ mt: '30px' }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: "10px" }} className='rounded'>
                        <Box sx={{ textAlign: 'center', backgroundColor: '#12372a', p: '13px', width: { xs: '90px', md: '115px' }, '&:hover': { 'backgroundColor': 'secondary.dark' } }} className='rounded'>
                            <Link to='/repos'>
                                <Typography>Repos</Typography>
                                <Typography sx={{ display: 'block', textAlign: 'center' }}>{userData.public_repos}</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ textAlign: 'center', backgroundColor: '#12372a', p: '13px', width: { xs: '90px', md: '115px' }, '&:hover': { 'backgroundColor': 'secondary.dark' } }} className='rounded'>
                            <Link to='/followers'>
                                <Typography>Followers</Typography>
                                <Typography sx={{ display: 'block', textAlign: 'center' }}>{userData.followers}</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ textAlign: 'center', backgroundColor: '#12372a', p: '13px', width: { xs: '90px', md: '115px' }, '&:hover': { 'backgroundColor': 'secondary.dark' } }} className='rounded'>
                            <Link to='/following'>
                                <Typography>Following</Typography>
                                <Typography sx={{ display: 'block', textAlign: 'center' }}>{userData.following}</Typography>
                            </Link>
                        </Box>
                    </Box>

                    <Box sx={{ backgroundColor: '#12372a', p: '17px', mt: '20px' }} className='rounded'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <XIcon sx={{ mr: '5px' }} /> 
                                <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userData.twitter_username || 'Not available'}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <LinkIcon sx={{ mr: '5px' }} /> 
                                <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userData.blog || 'Not available'}</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}> 
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <LocationOnIcon sx={{ mr: '5px' }} /> 
                                <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {userData.location || 'Not Found'}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', maxWidth: '43%' }}>
                                <BusinessIcon sx={{ mr: '5px' }} /> 
                                <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {userData.company || 'Not Found'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : null}
        </Box>
    );
};

export default ResultCard;
