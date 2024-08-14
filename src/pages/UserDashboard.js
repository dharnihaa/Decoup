import React, { useEffect, useState } from 'react';
import UserPieChart from './UserPieChart'; // Adjust the path if needed

const UserDashboard = ({ user }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user-specific data (replace with actual API call)
    // This is just example data
    const fetchData = async () => {
      // Simulate fetching user data
      const data = [
        { name: 'Redeemed Coupons', value: 60 },
        { name: 'Pending Coupons', value: 25 },
        { name: 'Expired Coupons', value: 15 },
      ];
      setUserData(data);
    };

    fetchData();
  }, [user]);

  return (
    <div className="user-dashboard">
      <h1>Welcome, {user.email}</h1>
      <UserPieChart data={userData} />
    </div>
  );
};

export default UserDashboard;
