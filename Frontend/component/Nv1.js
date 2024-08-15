import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import Star from '@mui/icons-material/Star';
// import StarBorder from '@mui/icons-material/StarBorder';

export default function AAC1() {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/camera'); // Navigate to Camera component
    };

    return (
        <Card 
            sx={{ 
                maxWidth: 400, 
                margin: 2,
                padding: '3vh',
                display: 'flex',
                flexDirection: 'column', // Make the card a flex container with column direction
                justifyContent: 'space-between', // Space out the content and actions
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 10,
                },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://m.media-amazon.com/images/I/71mJlzZpZDL.jpg"
                    alt="DSLR Camera"
                    style={{ padding: '2vh' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        DSLR Camera
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Canon EOS 5D Mark IV
                        <br />
                        Sensor: Full-frame CMOS
                        <br />
                        Megapixels: 30.4 MP
                        <br />
                        ISO Range: 100-32000 (expandable to 50-102400)
                        <br />
                        Autofocus: 61-point AF system
                    </Typography>
            <div style={{ alignItems: 'bottom', padding: '10px',marginTop:"10px" }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Rating:
                </Typography>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} sx={{ color: index < 5 ? 'gold' : 'lightgray' }} />
                    ))}
                </div>
            </div>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button 
                    size="large" 
                    sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' }, height: '5vh' }}
                    onClick={handleBookNow}
                >
                    Book Now
                </Button>
            </CardActions>
        </Card>
    );
}
