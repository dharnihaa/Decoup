import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-envelope"></i> Email: <a href="mailto:decoup@gmail.com">decoup@gmail.com</a></p>
                    <p><i className="fas fa-phone-alt"></i> Phone: <a href="tel:+916387676589">+91 6387676589</a></p>
                    <p><i className="fas fa-map-marker-alt"></i> Address: Plot 53, Avinasi Road, Coimbatore</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;