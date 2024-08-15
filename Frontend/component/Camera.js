import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Camera.css';
import Header from './Header';
import Footer from './Footer';

export default function Camera() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'Canon EOS 5D Mark IV',
      price: 2699
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
      <div className="camera-page">
        <Paper className="camera-details" elevation={4}>
          <img 
            src="https://cdn.vox-cdn.com/thumbor/HVlEKk0x57aq9kFLBcw5TmcOFsM=/0x0:2040x1530/2000x1333/filters:focal(1037x909:1038x910)/cdn.vox-cdn.com/uploads/chorus_asset/file/10297243/canon_m50_0033.jpg" 
            alt="Canon EOS 5D Mark IV" 
            className="camera-image"
          />
          <Typography variant="h3" className="camera-title">
            Canon EOS 5D Mark IV
          </Typography>
          <Typography variant="h6" className="camera-subtitle">
            Unleash Your Creativity
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
            Elevate your photography with the Canon EOS 5D Mark IV. Capture stunning images with exceptional quality and precision. Perfect for both amateur and professional photographers.
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
