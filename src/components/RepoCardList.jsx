import { Container, Grid } from '@mui/material';
import RepoCard from './RepoCard';
import { SearchContext } from '../assets/Context/SearchContext';
import { useContext, useEffect, useState } from 'react';

const RepoCardList = () => {
    const { searchInput } = useContext(SearchContext);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if (searchInput) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${searchInput}/repos`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    setRepos(JSON.parse(xhr.responseText));
                }
            };
            xhr.send();
        }
    }, [searchInput]);

    return (
        <Container sx={{mt:'16px'}}>
            <Grid container spacing={2}>
                {repos.map((repo) => (
                    <Grid item xs={12} md={3} key={repo.id}>
                        <RepoCard repo={repo} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RepoCardList;
