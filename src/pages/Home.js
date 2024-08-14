import React, { useState } from 'react';
import Carousel from '../component/Carousel';
import CouponCard from '../component/CouponCard';
import './Home.css'; // Ensure you're importing the correct CSS file
import cp1 from '../assets/cars6.jpg';
import cp2 from '../assets/cars.5jpg';
import cp3 from '../assets/cars7.jpg';
import cp4 from '../assets/cp4.jpg';
import cp5 from '../assets/cp5.jpg';
import cp6 from '../assets/cp6.jpg';
import cp7 from '../assets/cp7.jpg';
import cp8 from '../assets/cp8.jpg';
import cp9 from '../assets/cp9.jpg';

const coupons = [
    { title: '10% Off on Electronics', description: 'Get 10% off on Dresses', expiryDate: '2024-08-10', minPurchase: '500', code: 'FASHOION10', image: cp1 },
    { title: '20% Off on Fashion', description: 'Get 20% off on fashion items', expiryDate: '2024-11-30', minPurchase: '50', code: 'FASHION20', image: cp2 },
    { title: '15% Off on Home Decor', description: 'Get 15% off on home decor items', expiryDate: '2024-12-15', minPurchase: '75', code: 'HOME15', image: cp3 },
    { title: '25% Off on Shoes', description: 'Get 25% off on shoes', expiryDate: '2024-11-25', minPurchase: '80', code: 'SHOES25', image: cp4 },
    { title: '30% Off on Books', description: 'Get 30% off on books', expiryDate: '2024-10-31', minPurchase: '40', code: 'BOOKS30', image: cp5 },
    { title: '40% Off on Sports Gear', description: 'Get 40% off on sports gear', expiryDate: '2024-09-30', minPurchase: '100', code: 'SPORTS40', image: cp6 },
    { title: '50% Off on Beauty Products', description: 'Get 50% off on beauty products', expiryDate: '2024-08-31', minPurchase: '60', code: 'BEAUTY50', image: cp7 },
    { title: '35% Off on Toys', description: 'Get 35% off on toys', expiryDate: '2024-07-31', minPurchase: '30', code: 'TOYS35', image: cp8 },
    { title: '45% Off on Furniture', description: 'Get 45% off on furniture', expiryDate: '2024-06-30', minPurchase: '200', code: 'FURNITURE45', image: cp9 },
];

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="home-container">
            <header className="home-header">
                <center>
                    <h1>Welcome to CouponZone</h1>
                    <p>Your one-stop destination for exclusive deals and discounts</p>
                </center>
            </header>
            <Carousel />
            <section className="featured-coupons">
                <center>
                    <h2>Featured Coupons</h2>
                </center>
                <div className="coupon-grid">
                    {coupons.slice(0, 3).map((coupon, index) => (
                        <CouponCard
                            key={index}
                            title={coupon.title}
                            description={coupon.description}
                            expiryDate={coupon.expiryDate}
                            minPurchase={coupon.minPurchase}
                            code={coupon.code}
                            image={coupon.image}
                        />
                    ))}
                </div>
            </section>
            {/* <section className="top-coupons">
                <center>
                    <h2>Top Available Coupons</h2>
                </center>
                <div className="coupon-grid">
                    {coupons.map((coupon, index) => (
                        <CouponCard
                            key={index}
                            title={coupon.title}
                            description={coupon.description}
                            expiryDate={coupon.expiryDate}
                            minPurchase={coupon.minPurchase}
                            code={coupon.code}
                            image={coupon.image}
                        />
                    ))}
                </div>
            </section> */}
            <section className="questions-doubts">
                <center>
                    <h2>Questions & Doubts</h2>
                    <p>If you have any questions or need clarification about our coupons and discounts, feel free to reach out!</p>
                    <button onClick={openModal}>Contact Us</button>
                </center>
            </section>
            <section className="about-us">
                <center>
                    <h2>About Us</h2>
                    <p>CouponZone is dedicated to bringing you the best deals and discounts on your favorite products and services. Our platform aggregates the latest offers from top brands to help you save money on your purchases. Whether you’re looking for discounts on fashion, electronics, home decor, or more, we’ve got you covered. Stay tuned for exclusive deals and offers!</p>
                </center>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2>Contact Us</h2>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
