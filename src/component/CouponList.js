import React from 'react';
import CouponCard from './CouponCard';

const coupons = [
    { id: 1, title: '50% Off on Electronics', description: 'Get 50% off on all electronics', expiryDate: '31 Dec 2024', minPurchase: '$100', code: 'ELECTRO50' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Buy one get one free on all clothing', expiryDate: '30 Nov 2024', minPurchase: '$50', code: 'BOGO50' },
    { id: 3, title: '20% Off on Groceries', description: 'Save 20% on your grocery bill', expiryDate: '15 Aug 2024', minPurchase: '$20', code: 'GROC20' },
    { id: 4, title: '15% Off on Home Decor', description: '15% discount on all home decor items', expiryDate: '31 Dec 2024', minPurchase: '$75', code: 'DECOR15' },
    { id: 5, title: 'Free Shipping', description: 'Get free shipping on orders over $100', expiryDate: '31 Dec 2024', minPurchase: '$100', code: 'FREESHIP' },
    { id: 6, title: '10% Off on Books', description: 'Save 10% on all books', expiryDate: '31 Oct 2024', minPurchase: '$30', code: 'BOOK10' },
    { id: 7, title: '30% Off on Sportswear', description: '30% discount on sportswear', expiryDate: '31 Dec 2024', minPurchase: '$60', code: 'SPORT30' },
    { id: 8, title: '5% Off on Gadgets', description: 'Get 5% off on gadgets', expiryDate: '30 Nov 2024', minPurchase: '$50', code: 'GADGET5' },
    { id: 9, title: '25% Off on Jewelry', description: 'Save 25% on all jewelry items', expiryDate: '15 Aug 2024', minPurchase: '$200', code: 'JEWEL25' },
    { id: 10, title: 'Free Gift with Purchase', description: 'Receive a free gift with any purchase over $150', expiryDate: '31 Dec 2024', minPurchase: '$150', code: 'GIFT150' },
];

const CouponList = () => {
    return (
        <div className="coupon-list">
            {coupons.map(coupon => (
                <CouponCard
                    key={coupon.id}
                    title={coupon.title}
                    description={coupon.description}
                    expiryDate={coupon.expiryDate}
                    minPurchase={coupon.minPurchase}
                    code={coupon.code}
                />
            ))}
        </div>
    );
};

export default CouponList;