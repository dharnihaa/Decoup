import React, { useState, useEffect } from 'react';
import './MerchantDashboard.css';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/coupons';

const MerchantDashboard = () => {
    const [newCoupon, setNewCoupon] = useState({
        id: null, // Add id to track the coupon being edited
        title: '',
        description: '',
        expiryDate: '',
        minPurchase: '',
        code: '',
        image: '',
    });

    const [coupons, setCoupons] = useState([]);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setCoupons(response.data))
            .catch(error => console.error('Error fetching coupons:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCoupon((prevCoupon) => ({
            ...prevCoupon,
            [name]: value,
        }));
    };

    const handleAddCoupon = () => {
        if (newCoupon.title && newCoupon.code) {
            axios.post(API_URL, newCoupon, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setCoupons([...coupons, response.data]);
                    setNewCoupon({
                        id: null,
                        title: '',
                        description: '',
                        expiryDate: '',
                        minPurchase: '',
                        code: '',
                        image: '',
                    });
                    setEditing(false);
                })
                .catch(error => console.error('Error adding coupon:', error));
        } else {
            alert('Title and Code are required');
        }
    };

    const handleUpdateCoupon = () => {
        if (newCoupon.id && newCoupon.title && newCoupon.code) {
            axios.put(`${API_URL}/${newCoupon.id}`, newCoupon, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setCoupons(coupons.map(coupon => coupon.id === response.data.id ? response.data : coupon));
                    setNewCoupon({
                        id: null,
                        title: '',
                        description: '',
                        expiryDate: '',
                        minPurchase: '',
                        code: '',
                        image: '',
                    });
                    setEditing(false);
                })
                .catch(error => console.error('Error updating coupon:', error));
        } else {
            alert('ID, Title, and Code are required');
        }
    };

    const handleEditClick = (coupon) => {
        setNewCoupon(coupon);
        setEditing(true);
    };

    const handleDeleteCoupon = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => {
                setCoupons(coupons.filter(coupon => coupon.id !== id));
            })
            .catch(error => console.error('Error deleting coupon:', error));
    };

    return (
        <div className="merchant-dashboard">
            <header className="merchant-header">
                <h1>Merchant Dashboard</h1>
                <p>Manage your coupons here.</p>
            </header>
            <section className="coupon-form">
                <h2>{editing ? 'Edit Coupon' : 'Add New Coupon'}</h2>
                <input
                    type="text"
                    name="title"
                    value={newCoupon.title}
                    onChange={handleInputChange}
                    placeholder="Coupon Title"
                />
                <textarea
                    name="description"
                    value={newCoupon.description}
                    onChange={handleInputChange}
                    placeholder="Coupon Description"
                />
                <input
                    type="date"
                    name="expiryDate"
                    value={newCoupon.expiryDate}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="minPurchase"
                    value={newCoupon.minPurchase}
                    onChange={handleInputChange}
                    placeholder="Minimum Purchase"
                />
                <input
                    type="text"
                    name="code"
                    value={newCoupon.code}
                    onChange={handleInputChange}
                    placeholder="Coupon Code"
                />
                <input
                    type="text"
                    name="image"
                    value={newCoupon.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                />
                <button onClick={editing ? handleUpdateCoupon : handleAddCoupon}>
                    {editing ? 'Update Coupon' : 'Add Coupon'}
                </button>
            </section>
            <section className="coupon-list">
                <h2>Current Coupons</h2>
                <ul>
                    {coupons.map((coupon) => (
                        <li key={coupon.id}>
                            <h3>{coupon.title}</h3>
                            <p>{coupon.description}</p>
                            <p><strong>Minimum Purchase:</strong> ${coupon.minPurchase}</p>
                            <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                            <p><strong>Code:</strong> {coupon.code}</p>
                            <img src={coupon.image} alt={`Coupon ${coupon.id}`} className="coupon-image" />
                            <button onClick={() => handleEditClick(coupon)}>Edit</button>
                            <button onClick={() => handleDeleteCoupon(coupon.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default MerchantDashboard;
