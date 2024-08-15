import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const reviews = [
    {
        id: 1,
        user: 'John Doe',
        rating: 4,
        review: 'Great camera with excellent features. The image quality is top-notch!',
    },
    {
        id: 2,
        user: 'Jane Smith',
        rating: 5,
        review: 'Absolutely love this camera! Perfect for professional photography.',
    },
    {
        id: 3,
        user: 'Alex Johnson',
        rating: 3,
        review: 'Good camera, but a bit pricey for the features it offers.',
    },
];

export default function Ratings() {
    return (
        <Container sx={{ paddingY: 4 }}>
            <Typography variant="h4" gutterBottom>
                Customer Reviews and Ratings
            </Typography>
            <Box>
                {reviews.map((review) => (
                    <Paper key={review.id} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Typography variant="h6">{review.user}</Typography>
                        <Rating name="read-only" value={review.rating} readOnly />
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                            {review.review}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
}
