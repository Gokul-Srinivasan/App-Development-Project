import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, TextField, Stack, Alert } from '@mui/material';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get(`http://localhost:8080/user/login/${email}/${password}`);
      if (response.data) {
        console.log('Login successful:', response.data);
        alert("Login Successful:"+email);
        navigate('/home'); // Redirect to homepage or another protected route
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError(true);
    }
  };

  return (
    <div className='bodyl'>
      <Header/>
      <div className='bodybox'>
        <div className='dom'>
          <h1><span>LOGIN NOW !</span></h1>
          <br></br>
          <form className='f1' onSubmit={handleSubmit}>
            <TextField
              className='textfield'
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => { setEmail(e.target.value) }}
              required
            />
            <br></br>
            <TextField
              className='textfield'
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => { setPassword(e.target.value) }}
              required
            />
            <br></br>
            <div className='box2'>Forgot Password?</div>
            <br></br>
            <Stack sx={{ width: '100%' }} spacing={2}>
              {error && <Alert severity="warning">Wrong email or password!</Alert>}
            </Stack>
            <br></br>
            <Button className='rel' variant="contained" type="submit">LogIn</Button>
            <br></br>
            <h4><small><span>OR</span></small></h4>
            <br></br>
            <div className='box1'>
              <span>Don't have an account?</span>
              <Link to='/register'><Button>REGISTER</Button></Link>
            </div>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
