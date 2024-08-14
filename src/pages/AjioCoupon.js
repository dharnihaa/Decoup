import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from './FavoritesContext'; // Importing useFavorites
import './AjioCoupon.css';
import AJ1 from '../assets/cp1.jpg';
import AJ2 from '../assets/cp2.jpg';
import AJ3 from '../assets/cp3.jpg';
import AJ4 from '../assets/cp4.jpg';
import AJ5 from '../assets/cp5.jpg';
import AJ6 from '../assets/cp6.jpg';
import AJ7 from '../assets/cp7.jpg';
import AJ8 from '../assets/carosel8.jpg';
import AJ9 from '../assets/carousel1.jpg';

const AjioCoupon = () => {
    const { addFavorite, removeFavorite, getFavoritesByType } = useFavorites();
    const [copied, setCopied] = useState(null);

    // Define your coupons here
    const coupons = [
        { title: '20% Off on Electronics', description: 'Get 20% off on electronics', expiryDate: '2024-12-31', minPurchase: '300', code: 'ELECTRO20', image: AJ1 },
        { title: '10% Off on Books', description: 'Get 10% off on books', expiryDate: '2024-11-30', minPurchase: '50', code: 'BOOKS10', image: AJ2 },
        { title: '15% Off on Fashion', description: 'Get 15% off on fashion items', expiryDate: '2024-10-31', minPurchase: '100', code: 'FASHION15', image: AJ3 },
        { title: '25% Off on Home Appliances', description: 'Get 25% off on home appliances', expiryDate: '2024-12-15', minPurchase: '500', code: 'HOME25', image: AJ4 },
        { title: '5% Off on Grocery', description: 'Get 5% off on groceries', expiryDate: '2024-11-20', minPurchase: '30', code: 'GROCERY5', image: AJ5 },
        { title: '30% Off on Toys', description: 'Get 30% off on toys', expiryDate: '2024-12-25', minPurchase: '150', code: 'TOYS30', image: AJ6 },
        { title: '10% Off on Sports Equipment', description: 'Get 10% off on sports equipment', expiryDate: '2024-10-15', minPurchase: '200', code: 'SPORTS10', image: AJ7 },
        { title: '20% Off on Books', description: 'Get 20% off on books', expiryDate: '2024-11-30', minPurchase: '50', code: 'BOOKS20', image: AJ8 },
        { title: '15% Off on Kitchenware', description: 'Get 15% off on kitchenware', expiryDate: '2024-12-01', minPurchase: '75', code: 'KITCHEN15', image: AJ9 },
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(code);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const isFavorite = (code) => {
        const favorites = getFavoritesByType('Ajio') || [];
        return favorites.some(favorite => favorite.code === code);
    };

    const handleFavorite = (coupon) => {
        if (isFavorite(coupon.code)) {
            removeFavorite(coupon.code, 'Ajio');
        } else {
            addFavorite(coupon, 'Ajio');
        }
    };

    return (
        <div className="ajio-coupons-container">
            <header className="ajio-header">
                <h1>Ajio Coupons</h1>
                <p>Find the best deals and discounts on Ajio!</p>
            </header>
            <section className="ajio-coupon-grid">
                {coupons.map((coupon, index) => (
                    <div className="ajio-coupon-card" key={index}>
                        <div className="ajio-card-content">
                            <img src={coupon.image} alt={`Coupon ${index + 1}`} className="ajio-coupon-image" />
                            <div className="ajio-coupon-details">
                                <h3>{coupon.title}</h3>
                                <p>{coupon.description}</p>
                                <p><strong>Minimum Purchase:</strong> ${coupon.minPurchase}</p>
                                <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                                <p><strong>Code:</strong> {coupon.code}</p>
                            </div>
                        </div>
                        <div className="ajio-coupon-actions">
                            <button 
                                className={`ajio-copy-button ${copied === coupon.code ? 'copied' : ''}`}
                                onClick={() => handleCopy(coupon.code)}
                            >
                                {copied === coupon.code ? 'Copied!' : 'Copy Code'}
                            </button>
                            <FaHeart 
                                className={`ajio-favorite-icon ${isFavorite(coupon.code) ? 'favorite' : ''}`} 
                                onClick={() => handleFavorite(coupon)} 
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AjioCoupon;
