import React, { useState, useEffect } from 'react';
import { Paper, Typography, Button, Divider, List, ListItem, ListItemText, IconButton, Grid, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';
import Header from './Header';
import Footer from './Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const handleCheckout = () => {
    const amount = calculateTotal() * 100; 
    if (window.Razorpay) {
      var options = {
        key: 'rzp_test_AWrlyaXOO9ncih',
        amount: amount,
        currency: 'INR',
        name: 'Rent My Studio',
        description: 'Payment for your order',
        handler: function (response) {
          alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
          navigate('/');
        },
        prefill: {
          name: 'Customer Name', 
          email: 'customer@example.com', 
          contact: '1234567890', 
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };
  

  return (
    <div>
      <Header />
      <div className="cart-page">
        <Paper className="cart-details" elevation={4}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h3" align="center" gutterBottom>
              <ShoppingCartIcon fontSize="large" /> Your Cart
            </Typography>
          </Fade>
          <Divider variant="middle" />
          {cartItems.length === 0 ? (
            <Typography variant="h6" align="center" color="textSecondary">
              Your cart is empty.
            </Typography>
          ) : (
            <List>
              {cartItems.map((item, index) => (
                <ListItem key={index} divider>
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <Typography variant="body1" className="item-name">
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="body2" color="textSecondary">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                      <IconButton 
                        edge="end" 
                        color="secondary" 
                        onClick={() => handleRemoveItem(index)}
                        className="remove-button"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          )}
          <Divider variant="middle" />
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <Typography variant="h5" className="total-amount">
                Total: ${calculateTotal().toFixed(2)}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                className="checkout-button"
                onClick={handleCheckout}
              >
                Place Order
              </Button>
            </div>
          )}
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
