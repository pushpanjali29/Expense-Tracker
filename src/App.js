import React, { useState, useEffect } from 'react';
import WalletBalance from './components/WalletBalance';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';

function App() {
  const [balance, setBalance] = useState(
    () => JSON.parse(localStorage.getItem('balance')) || 5000
  );
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem('expenses')) || []
  );

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [balance, expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.amount);
  };

  const deleteExpense = (index) => {
    const expense = expenses[index];
    setExpenses(expenses.filter((_, i) => i !== index));
    setBalance(balance + expense.amount);
  };

  return (
    <div>
      <WalletBalance balance={balance} setBalance={setBalance} />
      <AddExpenseForm balance={balance} addExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={() => {} /* Implement later */}
      />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
}

export default App;
