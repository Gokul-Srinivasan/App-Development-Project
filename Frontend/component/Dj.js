import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Dj.css';
import Header from './Header';
import Footer from './Footer';

export default function Dj() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'DJ Controller XYZ',
      price: 899
    };
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartSnackbar(false);
  };

  return (
    <div>
      <Header />
      <div className="dj-page">
        <Paper className="dj-details" elevation={4}>
          <img 
            src="https://c4.wallpaperflare.com/wallpaper/904/821/218/headset-music-purple-nice-wallpaper-preview.jpg" 
            alt="DJ Controller XYZ" 
            className="dj-image"
          />
          <Typography variant="h3" className="dj-title">
            DJ Controller XYZ
          </Typography>
          <Typography variant="h6" className="dj-subtitle">
            Elevate Your DJ Performance
          </Typography>
          <Divider className="divider"/>
          <div className="price-section">
            <Typography variant="h6">
              Price Details
            </Typography>
            <Typography variant="body1" className="price-detail">
              Base Price: <strong>$50</strong>
            </Typography>
            <Typography variant="body1" className="price-detail">
              Tax: <strong>$2</strong>
            </Typography>
            <Typography variant="h6" className="total-price">
              Total: <strong>$52</strong>
            </Typography>
          </div>
          <Divider className="divider"/>
          <Button 
            variant="contained" 
            className="add-to-cart-button" 
            onClick={handleAddToCart}
            color="primary"
            size="large"
          >
            Add to Cart
          </Button>
        </Paper>
        <Paper className="business-message" elevation={2}>
          <Typography variant="h6">
            The DJ Controller XYZ is designed to bring your performances to life with precision and style. Featuring advanced controls and robust build quality, it's the perfect addition for any serious DJ.
          </Typography>
        </Paper>
      </div>
      <Snackbar 
        open={cartSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Added to Cart
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}
