// pages/dashboard.js

"use client"; // Add this at the top to make it a Client Component

import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Initialize chartData with an empty structure
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }] // Prevent `undefined` issue
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Example of fetched data
        const fetchedData = {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              label: 'Sales',
              data: [65, 59, 80, 81],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
        setChartData(fetchedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  // Conditionally render chart if chartData is available
  if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
        {/* Line Chart */}
        <Line data={chartData} />

        {/* Bar Chart */}
        <Bar data={chartData} />

        {/* Pie Chart */}
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
