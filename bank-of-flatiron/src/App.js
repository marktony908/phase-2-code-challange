import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';



const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions when the component mounts
  useEffect(() => {
    fetch('http://localhost:8000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  // Add a new transaction
  const addTransaction = (transaction) => {
    fetch('http://localhost:8000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(newTransaction => setTransactions([...transactions, newTransaction]))
      .catch(error => console.error('Error adding transaction:', error));
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Bank of Flatiron</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search transactions..."
        className="search-bar"
      />
    <TransactionTable transactions={filteredTransactions} />
    <TransactionForm addTransaction={addTransaction}/>
      {/* <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} /> */}
    </div>
  );
};

export default App;
