// import { Grid } from '@mui/material'
// import FollowingCard from './FollowingCard'

// const FollowingCardsList = () => {
//     return (
//         <Grid container gap={3} sx={{mt:{xs:'15px', md:'100px'}}}>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>
//             <FollowingCard/>   

//         </Grid>
            
//     )
// }

// export default FollowingCardsList
import { Divider, Grid, Typography } from '@mui/material';
import FollowingCard from './FollowingCard';

const FollowingCardsList = () => {
    return (
        <>
            <Typography variant="h3" sx={{textAlign:'center', mt: { xs: '15px', md: '30px' }}}>Following</Typography>
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
    );
}

export default FollowingCardsList;
