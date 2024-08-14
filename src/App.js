import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Suggestion from './pages/Suggestion';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyntraCoupon from './pages/MyntraCoupon';
import AmazonCoupon from './pages/AmazonCoupon';
import AjioCoupon from './pages/AjioCoupon';
import ZomatoCoupon from './pages/ZomatoCoupon';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard
import { FavoritesProvider } from './pages/FavoritesContext';
import MerchantDashboard from './component/MerchantDashboard';

const App = () => {
  // State to manage user information
  const [user, setUser] = useState({
    name: '',
    email: '',
    memberSince: ''
  });

  // Function to handle user sign-in and update state
  const handleUserSignIn = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <Router>
      {/* Wrap the application in FavoritesProvider */}
      <FavoritesProvider>
        <div>
          {/* Navbar component for navigation */}
          <Navbar />
          {/* Define the routes for the application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suggestions" element={<Suggestion />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/signin" element={<Signin onSignIn={handleUserSignIn} />} />
            <Route path="/signup" element={<Signup onSignUp={handleUserSignIn} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/admin-dashboard" element={<AdminDashboard user={user} />} />
            <Route path="/myntra-coupons" element={<MyntraCoupon />} />
            <Route path="/amazon-coupons" element={<AmazonCoupon />} />
            <Route path="/ajio-coupons" element={<AjioCoupon />} />
            <Route path="/zomato-coupons" element={<ZomatoCoupon />} />
            <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
          </Routes>
          {/* Footer component for additional links and information */}
          <Footer />
        </div>
      </FavoritesProvider>
    </Router>
  );
};

export default App;
