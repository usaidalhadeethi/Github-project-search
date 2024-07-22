import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';

const UserCard = ({ user }) => {
    return (
        <Card sx={{ margin: '10px' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={user.login} src={user.avatar_url} sx={{ marginRight: '10px' }} />
                    <Typography variant="h6">{user.login}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserCard;
