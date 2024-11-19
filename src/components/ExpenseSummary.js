import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseSummary({ expenses }) {
  const categories = [...new Set(expenses.map((e) => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((cat) =>
          expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={data} />;
}

export default ExpenseSummary;
