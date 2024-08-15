import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Screen.css';
import Header from './Header';
import Footer from './Footer';

export default function Screen() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'Samsung Galaxy Screen',
      price: 599
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
      <div className="screen-page">
        <Paper className="screen-details" elevation={4}>
          <img 
            src="https://computechstore.in/wp-content/uploads/2023/05/Elgato-Green-Screen-XL-3.jpg" 
            alt="Samsung Galaxy Screen" 
            className="screen-image"
          />
          <Typography variant="h3" className="screen-title">
            Elegato Green Screen
          </Typography>
          <Typography variant="h6" className="screen-subtitle">
            Enhance Your Viewing Experience
          </Typography>
          <Divider className="divider"/>
          <div className="price-section">
            <Typography variant="h6">
              Price Details
            </Typography>
            <Typography variant="body1" className="price-detail">
              Base Price: <strong>$35</strong>
            </Typography>
            <Typography variant="body1" className="price-detail">
              Tax: <strong>$2</strong>
            </Typography>
            <Typography variant="h6" className="total-price">
              Total: <strong>$37</strong>
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
            Experience the next level of display with the Elegato Green Screen. Ideal for both work and entertainment, offering stunning resolution and vibrant colors.
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
