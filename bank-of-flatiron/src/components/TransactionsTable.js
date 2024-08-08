import React from 'react';
import "../App.css"
const TransactionTable = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
