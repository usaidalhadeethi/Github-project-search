import { useState, useEffect, useContext } from 'react';
import { Container, Grid } from '@mui/material';
import UserCard from './UserCard';
import { SearchContext } from '../assets/Context/SearchContext';

const FollowingCardList = () => {
    const { searchInput } = useContext(SearchContext);
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        if (searchInput) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${searchInput}/following`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setFollowing(JSON.parse(xhr.responseText));
                }
            };
            xhr.send();
        }
    }, [searchInput]);

    return (
        <Container sx={{mt:'16px'}}>
            <Grid container spacing={2}>
                {following.map((user) => (
                    <Grid item xs={12} md={3} key={user.id}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FollowingCardList;
