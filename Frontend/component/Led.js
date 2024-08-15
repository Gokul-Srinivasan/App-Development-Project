import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Led.css';
import Header from './Header';
import Footer from './Footer';

export default function Led() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'LED TV 55-inch Ultra HD',
      price: 999
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
      <div className="led-page">
        <Paper className="led-details" elevation={4}>
          <img 
            src="https://i.ytimg.com/vi/XhecuXfY0vo/maxresdefault.jpg" 
            alt="LED TV 55-inch Ultra HD" 
            className="led-image"
          />
          <Typography variant="h3" className="led-title">
            LED Dj Light Ultra HD
          </Typography>
          <Typography variant="h6" className="led-subtitle">
            Experience the Future of Entertainment
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
            Transform your living space with the LED TV 55-inch Ultra HD. Enjoy crystal-clear visuals and immersive sound. Ideal for movie lovers and gaming enthusiasts alike.
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
