import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './Signup.css';

const API_URL = 'http://localhost:8080/api/auth/signup'; // Replace with your API endpoint

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the sign-up endpoint
      const response = await axios.post(API_URL, {
        name,
        email,
        password,
      });

      // Assuming the response contains a redirect URL
      const redirectUrl = response.data;
      onSignUp({ name, email }); // Adjust if needed based on actual response
      navigate(redirectUrl); // Redirect based on the response
    } catch (error) {
      // Handle any errors
      if (error.response) {
        setError(`Error: ${error.response.data}`);
      } else {
        setError('Error signing up. Please try again.');
      }
      console.error('Sign-up error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="signin-link">
        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
