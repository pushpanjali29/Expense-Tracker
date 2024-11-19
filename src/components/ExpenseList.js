import React from 'react';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.map((expense, index) => (
        <div key={index}>
          <p>
            {expense.title} - ${expense.amount} ({expense.category} on {expense.date})
          </p>
          <button onClick={() => editExpense(index)}>Edit</button>
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
