import { Divider, Grid, Typography } from '@mui/material'
import FollowingCard from './FollowingCard'

const FollowersCardsList = () => {
    return (
        <>
            <Typography variant="h3" sx={{textAlign:'center', mt: { xs: '15px', md: '30px' }}}>Followers</Typography>
            <Divider/>
            <Grid container spacing={5} sx={{mt: { xs: '0', md: '10px' }}}>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
                <Grid item xs={6} md={3}>
                    <FollowingCard />
                </Grid>
            </Grid>
        </>
    )
}

export default FollowersCardsList
