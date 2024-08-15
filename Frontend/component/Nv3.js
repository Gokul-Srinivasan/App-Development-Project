import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Star from '@mui/icons-material/Star';

export default function AAC3() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/mic');
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 400, 
        margin: 2,
        padding:'3vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 100,
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://gtrdirect.ca/wp-content/uploads/SM58-CN.jpg"
          alt="Mic"
          style={{padding:'2vh'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mic
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Shure SM58<br/>
            Description: A legendary dynamic microphone known for its sound quality.<br/>
            Features: Cardioid pickup pattern, built-in pop filter, frequency response tailored for vocals.<br/>
          </Typography>
          <div style={{ alignItems: 'bottom', padding: '10px',marginTop:'20px' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Rating:
                </Typography>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} sx={{ color: index < 4 ? 'gold' : 'lightgray' }} />
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
