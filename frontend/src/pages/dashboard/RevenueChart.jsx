import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  const [showChart, setShowChart] = useState(true);
  const [chartType, setChartType] = useState('bar');

  const revenueData = [500, 700, 800, 600, 750, 900, 650, 870, 960, 1020, 1100, 1150];

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue (USD)',
        data: revenueData,
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1f2937', // dark:text-white
        },
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
        color: '#1f2937', // dark:text-white
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#1f2937', // dark:text-white
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#1f2937', // dark:text-white
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Monthly Revenue</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType(chartType === 'bar' ? 'line' : 'bar')}
            className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
          >
            Switch to {chartType === 'bar' ? 'Line' : 'Bar'}
          </button>
          <button
            onClick={() => setShowChart(!showChart)}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            {showChart ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      {showChart && (
        <div className="relative h-64 w-full">
          {chartType === 'bar' ? (
            <Bar data={data} options={options} />
          ) : (
            <Line data={data} options={options} />
          )}
        </div>
      )}
    </div>
  );
};

export default RevenueChart;
