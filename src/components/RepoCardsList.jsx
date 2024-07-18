import { Divider, Grid, Typography } from "@mui/material"
import RepoCard from "./RepoCard"
const RepoCardsList = () => {
    return (
        <>
            <Typography variant="h3" sx={{textAlign:'center', mt: { xs: '15px', md: '30px' }}}>Repositories</Typography>
            <Divider/>
            <Grid container spacing={5} sx={{mt: { xs: '0', md: '10px' }}}>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <RepoCard />
                </Grid>
            </Grid>
        </>
    )
}

export default RepoCardsList
