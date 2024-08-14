import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from './FavoritesContext'; // Importing useFavorites
import './MyntraCoupon.css';
import MY1 from '../assets/du1.jpg';
import MY2 from '../assets/du2.jpg';
import MY3 from '../assets/du3.jpg';
import MY4 from '../assets/du4.jpg';
import MY5 from '../assets/du5.jpg';
import MY6 from '../assets/du6.jpg';
import MY7 from '../assets/du7.jpg';
import MY8 from '../assets/du8.jpg';
import MY9 from '../assets/du9.jpg';

const MyntraCoupon = () => {
    const { addFavorite, removeFavorite, getFavoritesByType } = useFavorites(); // Destructure addFavorite and removeFavorite from context
    const [copied, setCopied] = useState(null);

    // Define your coupons here
    const coupons = [
        { title: '25% Off on Clothing', description: 'Get 25% off on clothing', expiryDate: '2024-12-31', minPurchase: '200', code: 'CLOTHING25', image: MY1 },
        { title: '15% Off on Accessories', description: 'Get 15% off on accessories', expiryDate: '2024-11-30', minPurchase: '50', code: 'ACCESS15_1', image: MY2 },
        { title: '10% Off on Footwear', description: 'Get 10% off on footwear', expiryDate: '2024-10-15', minPurchase: '100', code: 'FOOTWEAR10', image: MY3 },
        { title: '20% Off on Bags', description: 'Get 20% off on bags', expiryDate: '2024-09-30', minPurchase: '75', code: 'BAGS20', image: MY4 },
        { title: '30% Off on Watches', description: 'Get 30% off on watches', expiryDate: '2024-08-31', minPurchase: '150', code: 'WATCHES30', image: MY5 },
        { title: '5% Off on Jewelry', description: 'Get 5% off on jewelry', expiryDate: '2024-07-31', minPurchase: '20', code: 'JEWELRY5', image: MY6 },
        { title: '50% Off on Clearance', description: 'Get 50% off on clearance items', expiryDate: '2024-06-30', minPurchase: '300', code: 'CLEARANCE50', image: MY7 },
        { title: '40% Off on Sportswear', description: 'Get 40% off on sportswear', expiryDate: '2024-05-31', minPurchase: '120', code: 'SPORTS40', image: MY8 },
        { title: '35% Off on Kidswear', description: 'Get 35% off on kidswear', expiryDate: '2024-04-30', minPurchase: '80', code: 'KIDS35', image: MY9 },
        // Add more coupons as needed
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(code);
            setTimeout(() => setCopied(null), 2000); // Clear copied state after 2 seconds
        });
    };

    // Check if the coupon is favorited
    const isFavorite = (code) => {
        const favorites = getFavoritesByType('Myntra') || []; // Default to empty array if undefined
        return favorites.some(favorite => favorite.code === code);
    };

    const handleFavorite = (coupon) => {
        if (isFavorite(coupon.code)) {
            removeFavorite(coupon.code, 'Myntra');
        } else {
            addFavorite(coupon, 'Myntra');
        }
    };

    return (
        <div className="myntra-coupons-container">
            <h2 className="coupon-heading">Myntra Coupons</h2>
            <div className="myntra-coupon-list">
                {coupons.map((coupon, index) => (
                    <div className="myntra-coupon-card" key={index}>
                        <div className="card-inner">
                            <img src={coupon.image} alt={`Coupon ${index + 1}`} className="myntra-coupon-image" />
                            <div className="myntra-coupon-content">
                                <h3>{coupon.title}</h3>
                                <p>{coupon.description}</p>
                                <p><strong>Minimum Purchase:</strong> ${coupon.minPurchase}</p>
                                <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                                <p><strong>Code:</strong> {coupon.code}</p>
                            </div>
                            <div className="myntra-actions">
                                <button 
                                    className={`myntra-copy-button ${copied === coupon.code ? 'copied' : ''}`}
                                    onClick={() => handleCopy(coupon.code)}
                                >
                                    {copied === coupon.code ? 'Copied!' : 'Copy Code'}
                                </button>
                                <FaHeart 
                                    className={`myntra-favorite-icon ${isFavorite(coupon.code) ? 'favorite' : ''}`} 
                                    onClick={() => handleFavorite(coupon)} // Use handleFavorite here
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyntraCoupon;
