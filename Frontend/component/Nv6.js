import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Star from '@mui/icons-material/Star';

export default function AAC6() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/led');
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 400, 
        margin: 2,
        padding:'3vh',
        display: 'flex',
        flexDirection: 'column', // Make the card a flex container with column direction
        justifyContent: 'space-between', // Space out the content and actions
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 100,
        },
      }}
    >
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image="https://5.imimg.com/data5/SELLER/Default/2020/9/GD/ZQ/TF/107087227/da-beatz-dj-led-par-light-for-stage-lighting-500x500.jpg"
          alt="LED DJ Light"
          style={{padding:'2vh'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Led DJ Light
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chauvet DJ GigBAR 2<br/>
            A versatile lighting system that includes LED derby, LED pars, a laser, and a strobe effect all mounted on a single bar. Ideal for DJs on the go.<br/>
          </Typography>
          <div style={{ alignItems: 'bottom', padding: '10px',marginTop:'65px' }}>
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
          sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } ,height:'5vh'}}
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
