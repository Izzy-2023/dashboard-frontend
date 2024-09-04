// pages/dashboard.js
import { useEffect, useState } from 'react';
import { Line, Bar, Pie, Candlestick } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import 'chartjs-chart-financial'; // For Candlestick Chart

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement);

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    // Fetch data from Django API
    const fetchData = async () => {
      try {
        const [candlestickRes, lineRes, barRes, pieRes] = await Promise.all([
          fetch('/api/candlestick-data'),
          fetch('/api/line-chart-data'),
          fetch('/api/bar-chart-data'),
          fetch('/api/pie-chart-data'),
        ]);
        const [candlestick, line, bar, pie] = await Promise.all([
          candlestickRes.json(),
          lineRes.json(),
          barRes.json(),
          pieRes.json(),
        ]);

        setCandlestickData(candlestick.data);
        setLineChartData(line);
        setBarChartData(bar);
        setPieChartData(pie);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: '600px', height: '400px' }}>
        <Candlestick data={candlestickData} />
      </div>
      <div>
        <Line data={lineChartData} />
      </div>
      <div>
        <Bar data={barChartData} />
      </div>
      <div>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
}
