import { useState, useEffect, useContext } from 'react';
import { Container, Grid } from '@mui/material';
import UserCard from './UserCard';
import { SearchContext } from '../assets/Context/SearchContext';

const FollowersCardList = () => {
    const { searchInput } = useContext(SearchContext);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (searchInput) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${searchInput}/followers`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setFollowers(JSON.parse(xhr.responseText));
                }
            };
            xhr.send();
        }
    }, [searchInput]);

    return (
        <Container sx={{mt:'16px'}}>
            <Grid container spacing={2}>
                {followers.map((user) => (
                    <Grid item xs={12} md={3} key={user.id}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FollowersCardList;
