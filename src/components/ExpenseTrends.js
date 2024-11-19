import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function ExpenseTrends({ expenses }) {
  const categories = [...new Set(expenses.map((e) => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categories.map((cat) =>
          expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return <Bar data={data} />;
}

export default ExpenseTrends;
