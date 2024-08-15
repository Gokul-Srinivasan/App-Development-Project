import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Star from '@mui/icons-material/Star';
export default function AAC2() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/speaker');
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
          boxShadow: 10,
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images-cdn.ubuy.co.in/64b3e4ff5bb9854e0c46fa99-rcf-hd-12-a-mk4-powered-pa-cabinet.jpg"
          alt="PA Speakers"
          style={{padding:'2vh'}}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PA Speakers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            QSC K12.2<br/>
            Power: 2000W<br/>
            Features: 12-inch woofer, advanced DSP, multiple inputs, and outputs<br/>
          </Typography>
          <div style={{ alignItems: 'bottom', padding: '10px',marginTop:'50px' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Rating:
                </Typography>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} sx={{ color: index < 4.2 ? 'gold' : 'lightgray' }} />
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
