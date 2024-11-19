import React, { useState } from 'react';

function WalletBalance({ balance, setBalance }) {
  const [income, setIncome] = useState('');

  const handleAddIncome = () => {
    if (income > 0) {
      setBalance(balance + Number(income));
      setIncome('');
    }
  };

  return (
    <div>
      <h2>Wallet Balance: ${balance}</h2>
      <input
        type="number"
        placeholder="Add Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add</button>
    </div>
  );
}

export default WalletBalance;
