"use client"; // Add this at the top to make it a Client Component

import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'chartjs-chart-financial'; // Ensure this import is correct

// Register chart elements including the FinancialElement for candlestick charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  'chartjs-chart-financial'
);

const Dashboard = () => {
  // Initialize states for each chart
  const [lineData, setLineData] = useState({ labels: [], datasets: [] });
  const [barData, setBarData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });
  const [candlestickData, setCandlestickData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Line Chart Data
        const lineResponse = await fetch('http://localhost:8000/api/line-chart-data/');
        const lineResult = await lineResponse.json();
        setLineData({
          labels: lineResult.labels || [],
          datasets: [
            {
              label: 'Line Chart Data',
              data: lineResult.data || [],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        });

        // Fetch Bar Chart Data
        const barResponse = await fetch('http://localhost:8000/api/bar-chart-data/');
        const barResult = await barResponse.json();
        setBarData({
          labels: barResult.labels || [],
          datasets: [
            {
              label: 'Bar Chart Data',
              data: barResult.data || [],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        });

        // Fetch Pie Chart Data
        const pieResponse = await fetch('http://localhost:8000/api/pie-chart-data/');
        const pieResult = await pieResponse.json();
        setPieData({
          labels: pieResult.labels || [],
          datasets: [
            {
              label: 'Pie Chart Data',
              data: pieResult.data || [],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });

        // Fetch Candlestick Chart Data
        const candlestickResponse = await fetch('http://localhost:8000/api/candlestick-data/');
        const candlestickResult = await candlestickResponse.json();
        setCandlestickData({
          datasets: [
            {
              label: 'Candlestick Chart Data',
              data: (candlestickResult.data || []).map(item => ({
                x: item.x,
                o: item.open,
                h: item.high,
                l: item.low,
                c: item.close,
              })),
              borderColor: 'rgba(0, 128, 0, 0.8)',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard</h1>

      <div style={styles.chartsContainer}>
        {/* Left column: Line Chart and Bar Chart */}
        <div style={styles.column}>
          <div style={styles.chartWrapper}>
            <h2>Line Chart</h2>
            <Line data={lineData} />
          </div>

          <div style={styles.chartWrapper}>
            <h2>Bar Chart</h2>
            <Bar data={barData} />
          </div>
        </div>

        {/* Right column: Pie Chart and Candlestick Chart */}
        <div style={styles.column}>
          <div style={styles.chartWrapper}>
            <h2>Pie Chart</h2>
            <Pie data={pieData} />
          </div>

          <div style={styles.chartWrapper}>
            <h2>Candlestick Chart</h2>
            <canvas id="candlestickChart" />
            <script>
              {`
                const ctx = document.getElementById('candlestickChart').getContext('2d');
                new Chart(ctx, {
                  type: 'candlestick',
                  data: ${JSON.stringify(candlestickData)},
                  options: {
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                      },
                    },
                  },
                });
              `}
            </script>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles for layout and appearance
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    maxWidth: '1200px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  chartsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '20px', // Adds spacing between columns
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '20px', // Adds space between charts in each column
  },
  chartWrapper: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    minHeight: '400px',
  },
};

export default Dashboard;


