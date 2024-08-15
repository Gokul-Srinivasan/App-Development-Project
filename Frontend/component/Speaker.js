import React, { useState } from 'react';
import { Paper, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import './Speaker.css';
import Header from './Header';
import Footer from './Footer';

export default function Speaker() {
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      name: 'QSC K12.2 Speakers',
      price: 1079
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
      <div className="speaker-page">
        <Paper className="speaker-details" elevation={4}>
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2021/5/MI/NA/UC/8860442/qsc-k10-2-powered-speaker.jpeg" 
            alt="QSC K12.2 Speakers" 
            className="speaker-image"
          />
          <Typography variant="h3" className="speaker-title">
            QSC K12.2 Speakers
          </Typography>
          <Typography variant="h6" className="speaker-subtitle">
            Experience Superior Sound Quality
          </Typography>
          <Divider className="divider"/>
          <div className="price-section">
            <Typography variant="h6">
              Price Details
            </Typography>
            <Typography variant="body1" className="price-detail">
              Base Price: <strong>$999</strong>
            </Typography>
            <Typography variant="body1" className="price-detail">
              Tax: <strong>$80</strong>
            </Typography>
            <Typography variant="h6" className="total-price">
              Total: <strong>$1079</strong>
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
            Discover the power of the QSC K12.2 Speakers. Engineered for superior sound quality and built to last, these speakers are perfect for any professional sound setup.
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
