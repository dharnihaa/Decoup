import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from './FavoritesContext'; // Importing useFavorites
import './AmazonCoupon.css';
import AM1 from '../assets/ud1.jpg';
import AM2 from '../assets/ud2.jpg';
import AM3 from '../assets/ud3.jpg';
import AM4 from '../assets/ud4.jpg';
import AM5 from '../assets/ud5.jpg';
import AM6 from '../assets/ud6.jpg';
import AM7 from '../assets/ud7.jpg';
import AM8 from '../assets/ud8.jpg';
import AM9 from '../assets/ud9.jpg';

const AmazonCoupon = () => {
    const { addFavorite, removeFavorite, getFavoritesByType } = useFavorites();
    const [copied, setCopied] = useState(null);

    // Define your coupons here
    const coupons = [
        { title: '20% Off on Electronics', description: 'Get 20% off on electronics', expiryDate: '2024-12-31', minPurchase: '300', code: 'ELECTRO20', image: AM1 },
        { title: '10% Off on Books', description: 'Get 10% off on books', expiryDate: '2024-11-30', minPurchase: '50', code: 'BOOKS10', image: AM2 },
        { title: '15% Off on Fashion', description: 'Get 15% off on fashion items', expiryDate: '2024-10-31', minPurchase: '100', code: 'FASHION15', image: AM3 },
        { title: '25% Off on Home Appliances', description: 'Get 25% off on home appliances', expiryDate: '2024-12-15', minPurchase: '500', code: 'HOME25', image: AM4 },
        { title: '5% Off on Grocery', description: 'Get 5% off on groceries', expiryDate: '2024-11-20', minPurchase: '30', code: 'GROCERY5', image: AM5 },
        { title: '30% Off on Toys', description: 'Get 30% off on toys', expiryDate: '2024-12-25', minPurchase: '150', code: 'TOYS30', image: AM6 },
        { title: '10% Off on Sports Equipment', description: 'Get 10% off on sports equipment', expiryDate: '2024-10-15', minPurchase: '200', code: 'SPORTS10', image: AM7 },
        { title: '20% Off on Books', description: 'Get 20% off on books', expiryDate: '2024-11-30', minPurchase: '50', code: 'BOOKS20', image: AM8 },
        { title: '15% Off on Kitchenware', description: 'Get 15% off on kitchenware', expiryDate: '2024-12-01', minPurchase: '75', code: 'KITCHEN15', image: AM9 },
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(code);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const isFavorite = (code) => {
        const favorites = getFavoritesByType('Amazon') || [];
        return favorites.some(favorite => favorite.code === code);
    };

    const handleFavorite = (coupon) => {
        if (isFavorite(coupon.code)) {
            removeFavorite(coupon.code, 'Amazon');
        } else {
            addFavorite(coupon, 'Amazon');
        }
    };

    return (
        <div className="amazon-coupons-container">
            <header className="amazon-header">
                <h1>Amazon Coupons</h1>
                <p>Find the best deals and discounts on Amazon!</p>
            </header>
            <section className="amazon-coupon-grid">
                {coupons.map((coupon, index) => (
                    <div className="amazon-coupon-card" key={index}>
                        <div className="amazon-card-content">
                            <img src={coupon.image} alt={`Coupon ${index + 1}`} className="amazon-coupon-image" />
                            <div className="amazon-coupon-details">
                                <h3>{coupon.title}</h3>
                                <p>{coupon.description}</p>
                                <p><strong>Minimum Purchase:</strong> ${coupon.minPurchase}</p>
                                <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                                <p><strong>Code:</strong> {coupon.code}</p>
                            </div>
                        </div>
                        <div className="amazon-coupon-actions">
                            <button 
                                className={`amazon-copy-button ${copied === coupon.code ? 'copied' : ''}`}
                                onClick={() => handleCopy(coupon.code)}
                            >
                                {copied === coupon.code ? 'Copied!' : 'Copy Code'}
                            </button>
                            <FaHeart 
                                className={`amazon-favorite-icon ${isFavorite(coupon.code) ? 'favorite' : ''}`} 
                                onClick={() => handleFavorite(coupon)} 
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AmazonCoupon;
