import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './Signin.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the sign-in endpoint
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        email,
        password,
      });

      // Assuming the response contains user info
      const userInfo = response.data;
      onSignIn(userInfo);

      // Redirect based on email domain or role
      if (email.includes('admin')) {
        navigate('/admin-dashboard');
      } else if (email.includes('ajio') || email.includes('myntra') || email.includes('amazon') || email.includes('zomato')) {
        navigate('/merchant-dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      // Handle any errors
      setError('Invalid email or password.');
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div className="signin-container">
      <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
