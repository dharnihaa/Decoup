import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from './FavoritesContext'; // Importing useFavorites
import './ZomatoCoupon.css';
import ZM1 from '../assets/cp17.jpg';
import ZM2 from '../assets/cp16.jpg';
import ZM3 from '../assets/cp18.jpg';
import ZM4 from '../assets/cp19.jpg';
import ZM5 from '../assets/cp20.jpg';
import ZM6 from '../assets/cp21.jpg';
import ZM7 from '../assets/cp22.jpg';
import ZM8 from '../assets/cp24.jpg';
import ZM9 from '../assets/cp16.jpg';

const ZomatoCoupon = () => {
    const { addFavorite, removeFavorite, getFavoritesByType } = useFavorites();
    const [copied, setCopied] = useState(null);

    // Define your coupons here
    const coupons = [
        { title: '20% Off on Orders', description: 'Get 20% off on all orders', expiryDate: '2024-12-31', minPurchase: '300', code: 'ORDER20', image: ZM1 },
        { title: '10% Off on First Order', description: 'Get 10% off on your first order', expiryDate: '2024-11-30', minPurchase: '50', code: 'FIRST10', image: ZM2 },
        { title: '15% Off on Dine-In', description: 'Get 15% off on dine-in', expiryDate: '2024-10-31', minPurchase: '100', code: 'DINE15', image: ZM3 },
        { title: '25% Off on Pizza', description: 'Get 25% off on pizza orders', expiryDate: '2024-12-15', minPurchase: '500', code: 'PIZZA25', image: ZM4 },
        { title: '5% Off on Desserts', description: 'Get 5% off on dessert orders', expiryDate: '2024-11-20', minPurchase: '30', code: 'DESSERT5', image: ZM5 },
        { title: '30% Off on Beverages', description: 'Get 30% off on beverages', expiryDate: '2024-12-25', minPurchase: '150', code: 'BEVERAGE30', image: ZM6 },
        { title: '10% Off on Seafood', description: 'Get 10% off on seafood orders', expiryDate: '2024-10-15', minPurchase: '200', code: 'SEAFOOD10', image: ZM7 },
        { title: '20% Off on Burgers', description: 'Get 20% off on burger orders', expiryDate: '2024-11-30', minPurchase: '50', code: 'BURGER20', image: ZM8 },
        { title: '15% Off on Pastas', description: 'Get 15% off on pasta orders', expiryDate: '2024-12-01', minPurchase: '75', code: 'PASTA15', image: ZM9 },
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(code);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const isFavorite = (code) => {
        const favorites = getFavoritesByType('Zomato') || [];
        return favorites.some(favorite => favorite.code === code);
    };

    const handleFavorite = (coupon) => {
        if (isFavorite(coupon.code)) {
            removeFavorite(coupon.code, 'Zomato');
        } else {
            addFavorite(coupon, 'Zomato');
        }
    };

    return (
        <div className="zomato-coupons-container">
            <header className="zomato-header">
                <h1>Zomato Coupons</h1>
                <p>Find the best deals and discounts on Zomato!</p>
            </header>
            <section className="zomato-coupon-grid">
                {coupons.map((coupon, index) => (
                    <div className="zomato-coupon-card" key={index}>
                        <div className="zomato-card-content">
                            <img src={coupon.image} alt={`Coupon ${index + 1}`} className="zomato-coupon-image" />
                            <div className="zomato-coupon-details">
                                <h3>{coupon.title}</h3>
                                <p>{coupon.description}</p>
                                <p><strong>Minimum Purchase:</strong> ${coupon.minPurchase}</p>
                                <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                                <p><strong>Code:</strong> {coupon.code}</p>
                            </div>
                        </div>
                        <div className="zomato-coupon-actions">
                            <button 
                                className={`zomato-copy-button ${copied === coupon.code ? 'copied' : ''}`}
                                onClick={() => handleCopy(coupon.code)}
                            >
                                {copied === coupon.code ? 'Copied!' : 'Copy Code'}
                            </button>
                            <FaHeart 
                                className={`zomato-favorite-icon ${isFavorite(coupon.code) ? 'favorite' : ''}`} 
                                onClick={() => handleFavorite(coupon)} 
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ZomatoCoupon;
