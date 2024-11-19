import React, { useState } from 'react';

function AddExpenseForm({ balance, addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!title || !amount || !category || !date) {
      alert('All fields are required!');
      return;
    }

    if (Number(amount) > balance) {
      alert('Insufficient wallet balance!');
      return;
    }

    addExpense({ title, amount: Number(amount), category, date });
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Expense</button>
    </div>
  );
}

export default AddExpenseForm;
