import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Mic.css';
import Header from './Header';
import Footer from './Footer';

export default function Mic() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'High-Quality Microphone',
      price: 199
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
      <div className="mic-page">
        <Paper className="mic-details" elevation={4}>
          <img 
            src="https://c4.wallpaperflare.com/wallpaper/815/793/208/microphone-shure-sm58-music-wallpaper-preview.jpg" 
            alt="High-Quality Microphone" 
            className="mic-image"
          />
          <Typography variant="h3" className="mic-title">
            Shure SM58 Microphone
          </Typography>
          <Typography variant="h6" className="mic-subtitle">
            Superior Sound Quality
          </Typography>
          <Divider className="divider"/>
          <div className="price-section">
            <Typography variant="h6">
              Price Details
            </Typography>
            <Typography variant="body1" className="price-detail">
              Base Price: <strong>$30</strong>
            </Typography>
            <Typography variant="body1" className="price-detail">
              Tax: <strong>$2</strong>
            </Typography>
            <Typography variant="h6" className="total-price">
              Total: <strong>$32</strong>
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
            Experience crystal-clear sound with the Shure SM58. Ideal for podcasting, streaming, and professional recording. Enhance your audio setup with this top-of-the-line mic.
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
