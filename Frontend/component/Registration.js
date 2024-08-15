import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        setSuccess(true);
      } else {
        console.error('Registration failed:', data);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
    }
  };

  return (
    <div className="ui">
      <div className="registration-container">
        <h2>Sign Up</h2>
        {success && <Alert severity="success">Successfully Registered.</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">Sign Up</button>
          <br />
          <Link to="/" className="signin-link">Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
