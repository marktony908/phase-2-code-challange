import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const transactions = [
  {
      id: 1,
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000
  },
  // Add other initial transactions if needed
];

const transactionsBody = document.getElementById('transactionsBody');
const transactionForm = document.getElementById('transactionForm');
const searchInput = document.getElementById('searchInput');

// Function to display transactions in the table
function displayTransactions(filteredTransactions) {
  transactionsBody.innerHTML = '';

  filteredTransactions.forEach(transaction => {
      const row = document.createElement('tr');

      Object.keys(transaction).forEach(key => {
          if (key !== 'id') {
              const cell = document.createElement('td');
              cell.textContent = transaction[key];
              row.appendChild(cell);
          }
      });

      transactionsBody.appendChild(row);
  });
}

// Initial display of transactions
displayTransactions(transactions);

// Handle form submission to add a new transaction
transactionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTransaction = {
      id: transactions.length + 1,
      date: document.getElementById('dateInput').value,
      description: document.getElementById('descInput').value,
      category: document.getElementById('categoryInput').value,
      amount: parseFloat(document.getElementById('amountInput').value)
  };

  transactions.push(newTransaction);
  displayTransactions(transactions);

  // Clear the form fields
  transactionForm.reset();
});

// Handle search input for filtering transactions
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredTransactions = transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(searchTerm)
  );

  displayTransactions(filteredTransactions);
});

