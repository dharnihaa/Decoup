import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './Profile.css';
import avatar from '../assets/avatar.jpg';

// Sample data
const data = [
  { name: 'Amazon', value: 50 },
  { name: 'Myntra', value: 23 },
  { name: 'Ajio', value: 70 },
  { name: 'Zomato', value: 10 },
];

const COLORS = ['#153448', '#DFD0B8', '#948979', '#3C5B6F'];

const reviews = [
  { id: 1, reviewer: 'John Doe', text: 'Great service and fast delivery!', rating: 5 },
  { id: 2, reviewer: 'Jane Smith', text: 'Good quality products, but delivery took longer than expected.', rating: 3 },
  { id: 3, reviewer: 'Alice Johnson', text: 'Very satisfied with my purchase. Highly recommend!', rating: 4 },
];

const Profile = ({ user }) => {
  const [feedback, setFeedback] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here (e.g., send it to an API)
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-content">
        <div className="profile-details">
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Member Since:</strong> {user.memberSince}</p>
        </div>
        <div className="chart-container">
          <h2>Coupon Usage</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="feedback-section">
          <h2>Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Leave your feedback here..."
              rows="4"
              cols="50"
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <div>
                  <strong>{review.reviewer}</strong>
                  <div className="star-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className="star">
                        {index < review.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                <p>{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showPopup && (
        <div className="popup-message">Feedback sent successfully!</div>
      )}
    </div>
  );
};

export default Profile;
