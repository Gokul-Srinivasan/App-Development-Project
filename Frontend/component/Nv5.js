import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Star from '@mui/icons-material/Star';

export default function AAC5() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/dj');
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
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images-cdn.ubuy.co.in/65c219f58a3038110410ee8b-behringer-pro-mixer-djx750-4-channel-dj.jpg"
          alt="DJ Mixer"
          style={{padding:'2vh'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DJ Mixer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pioneer DJ DJM-900NXS2<br/>
            Features:<br/>
            4-channel mixer<br/>
            64-bit mixing processor for a warm, natural analog sound<br/>
            Built-in sound card<br/>
            Advanced effects with detailed parameter control<br/>
          </Typography>
          <div style={{ alignItems: 'bottom', padding: '10px',marginTop:'10px' }}>
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
