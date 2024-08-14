import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        // Convert search query to lower case to match case-insensitively
        const query = searchQuery.toLowerCase();
        if (query === 'myntra') {
            navigate('/myntra-coupons');
        } else if (query === 'amazon') {
            navigate('/amazon-coupons');
        } else if (query === 'ajio') {
            navigate('/ajio-coupons');
        } else if (query === 'zomato') {
            navigate('/zomato-coupons');
        } else {
            // Handle cases where the search query does not match any predefined options
            alert('No results found for your search query.');
        }
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/suggestions" className="nav-link">Suggestions</Link>
                
                {/* Search Bar */}
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>

                <Link to="/favorites" className="nav-link">
                    <FontAwesomeIcon icon={faHeart} className="favorites-icon" />
                </Link>
                <div className="nav-link profile-dropdown">
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                    <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">Dashboard</Link>
                        <Link to="/signin" className="dropdown-item">Signin</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
