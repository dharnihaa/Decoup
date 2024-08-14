import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

// Example data for coupon redemption status
const data = [
  { name: 'Redeemed', value: 600 },
  { name: 'Pending', value: 250 },
  { name: 'Expired', value: 150 },
];

const COLORS = ['#4CAF50', '#FFC107', '#FF5722'];

const RedemptionStatusPieChart = () => {
  return (
    <div className="chart-container">
      <h2>Coupon Redemption Status</h2>
      <ResponsiveContainer width="100%" height={300}>
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
  );
};

export default RedemptionStatusPieChart;
