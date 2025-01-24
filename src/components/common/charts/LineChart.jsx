import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

const Utils = {
  months: ({ count }) => {
    const date = new Date();
    return Array.from({ length: count }, (_, i) => {
      date.setMonth(date.getMonth() - i);
      return date.toLocaleString('default', { month: 'long' });
    }).reverse();
  },
};

const LineChart = () => {
  const labels = Utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(107, 33, 168, 0.2)',
        borderColor: 'rgb(107, 33, 168)',
        tension: 0.1,
      },
      {
        label: 'Total Sales',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
            family: 'Inter',
            style: 'normal',
            weight: 'normal',
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
            family: 'Inter',
            style: 'normal',
            weight: 'normal',
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: "circle",
          font: {
            size: 14,
            family: 'Inter',
            style: 'normal',
            weight: 'normal',
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
          family: 'Inter',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;