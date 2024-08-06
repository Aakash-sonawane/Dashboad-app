import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import data from '../data'; // Import the data you provided

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const [activityType, setActivityType] = useState('daily');
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const processData = () => {
      const orders = data.orders;
      let groupedData = {};

      if (activityType === 'daily') {
        groupedData = groupBy(orders, 'day');
      } else if (activityType === 'weekly') {
        groupedData = groupBy(orders, 'week');
      } else if (activityType === 'monthly') {
        groupedData = groupBy(orders, 'month');
      }

      // Sort the labels and data based on the labels
      const sortedKeys = Object.keys(groupedData).sort((a, b) => {
        const aDate = moment(a, getDateFormat());
        const bDate = moment(b, getDateFormat());
        return aDate - bDate;
      });

      const sortedValues = sortedKeys.map(key => groupedData[key]);

      setChartData({
        labels: sortedKeys,
        datasets: [
          {
            label: 'Orders',
            data: sortedValues,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    };

    const groupBy = (orders, period) => {
      return orders.reduce((acc, order) => {
        const date = moment(order.orderDate, 'DD-MM-YYYY');
        let key;

        if (period === 'day') {
          key = date.format('DD');
        } else if (period === 'week') {
          key = date.startOf('isoWeek').format('DD-MM');
        } else if (period === 'month') {
          key = date.format('MM-YYYY');
        }

        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key] += order.amount;
        return acc;
      }, {});
    };

    const getDateFormat = () => {
      if (activityType === 'daily') return 'DD';
      if (activityType === 'weekly') return 'DD-MM';
      if (activityType === 'monthly') return 'MM-YYYY';
    };

    processData();
  }, [activityType]);

  const handleDropdownChange = (event) => {
    setActivityType(event.target.value);
  };

  return (
    <div className="activity-chart">
      <div className="dropdown">
        <select value={activityType} onChange={handleDropdownChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      {chartData && chartData.labels && (
        <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Add this line
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#fff',
              },
            },
            y: {
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
              ticks: {
                color: '#fff',
                beginAtZero: true,
                callback: function (value) {
                  return value >= 1000 ? value / 1000 + 'k' : value;
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Amount: $${context.raw.toLocaleString()}`;
                },
              },
            },
          },
        }}
      />
      )}
    </div>
  );
};

export default ActivityChart;
