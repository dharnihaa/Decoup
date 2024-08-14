import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Suggestion.css';

import cp1 from '../assets/cp1.jpg';
import cp2 from '../assets/cp2.jpg';
import cp3 from '../assets/cp3.jpg';
import cp4 from '../assets/cp4.jpg';
import cp5 from '../assets/cp5.jpg';
import cp6 from '../assets/cp6.jpg';
import cp7 from '../assets/cp7.jpg';
import cp8 from '../assets/cp8.jpg';
import cp9 from '../assets/cp9.jpg';
import cp10 from '../assets/cp10.jpg';
import cp11 from '../assets/cp11.jpg';
import cp12 from '../assets/cp12.jpg';
import cp13 from '../assets/cp13.jpg';
import cp14 from '../assets/cp14.jpg';
import cp15 from '../assets/cp15.jpg';

const coupons = [
    { id: 1, title: '50% Off on Electronics', description: 'Get 50% off on all electronics', expiry: '31 Dec 2024', code: 'MYT200', image: cp1 },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all clothing', expiry: '30 Nov 2024', code: 'MYT10', image: cp2 },
    { id: 3, title: '20% Off on Groceries', description: 'Save 20% on your grocery bill', expiry: '15 Aug 2024', code: 'AJIO200', image: cp3 },
    { id: 4, title: '30% Off on Shoes', description: 'Get 30% off on all shoes', expiry: '31 Dec 2024', code: 'SHOE30', image: cp4 },
    { id: 5, title: '10% Off on Books', description: 'Get 10% off on all books', expiry: '30 Nov 2024', code: 'BOOK10', image: cp5 },
    { id: 6, title: '15% Off on Home Decor', description: 'Save 15% on home decor items', expiry: '15 Aug 2024', code: 'HOME15', image: cp6 },
    { id: 7, title: '25% Off on Beauty Products', description: 'Get 25% off on all beauty products', expiry: '31 Dec 2024', code: 'BEAUTY25', image: cp7 },
    { id: 8, title: '5% Off on Stationery', description: 'Save 5% on all stationery items', expiry: '30 Nov 2024', code: 'STATION5', image: cp8 },
    { id: 9, title: '35% Off on Furniture', description: 'Get 35% off on all furniture', expiry: '15 Aug 2024', code: 'FURNI35', image: cp9 },
    { id: 10, title: '40% Off on Toys', description: 'Save 40% on all toys', expiry: '31 Dec 2024', code: 'TOY40', image: cp10 },
    { id: 11, title: '20% Off on Kitchen Appliances', description: 'Get 20% off on kitchen appliances', expiry: '30 Nov 2024', code: 'KITCHEN20', image: cp11 },
    { id: 12, title: '50% Off on Sports Gear', description: 'Save 50% on sports gear', expiry: '15 Aug 2024', code: 'SPORTS50', image: cp12 },
    { id: 13, title: '60% Off on Outdoor Furniture', description: 'Get 60% off on outdoor furniture', expiry: '31 Dec 2024', code: 'OUTDOOR60', image: cp13 },
    { id: 14, title: '70% Off on Winter Clothing', description: 'Save 70% on winter clothing', expiry: '30 Nov 2024', code: 'WINTER70', image: cp14 },
    { id: 15, title: '80% Off on Summer Sale', description: 'Get 80% off on summer sale items', expiry: '15 Aug 2024', code: 'SUMMER80', image: cp15 },
];

const Suggestion = () => {
    const handleCopy = (coupon) => {
        navigator.clipboard.writeText(coupon.code);
        alert('Coupon code copied!');
    };

    return (
        <Container>
            <center><h1 className="my-4">Frequently Purchased Coupons</h1></center>
            <Row>
                {coupons.map((coupon) => (
                    <Col key={coupon.id} md={4} className="mb-4">
                        <Card className="coupon-card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <Card.Img variant="top" src={coupon.image} />
                                </div>
                                <div className="card-back">
                                    <Card.Body className="coupon-description">
                                        <Card.Title>{coupon.title}</Card.Title>
                                        <Card.Text>
                                            {coupon.description}
                                            <br />
                                            <strong>Expiry:</strong> {coupon.expiry}
                                        </Card.Text>
                                        <Button onClick={() => handleCopy(coupon)}>Copy Code</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Suggestion; 