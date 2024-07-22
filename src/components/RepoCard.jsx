import { Card, CardContent, Typography } from '@mui/material';

const RepoCard = ({ repo }) => {
    return (
        <Card sx={{ margin: '10px' }}>
            <CardContent>
                <Typography variant="h6">{repo.name}</Typography>
                <Typography variant="body2" color="text.secondary">{repo.description || 'No description available'}</Typography>
            </CardContent>
        </Card>
    );
};

export default RepoCard;
