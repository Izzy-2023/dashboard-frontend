// pages/dashboard.js
"use client";  // Add this line at the top of the file

import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  const chartRef = useRef(null);

  // Example data for Line Chart
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Line ref={chartRef} data={data} />
      {/* Add other charts here */}
    </div>
  );
};

export default Dashboard;
