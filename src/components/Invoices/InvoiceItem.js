import React from 'react';

const InvoiceItem = ({ invoice }) => {
  return (
    <div>
      <p>Title: {invoice.title}</p>
      <p>Amount: {invoice.amount}</p>
      {/* Add more invoice details */}
    </div>
  );
};

export default InvoiceItem;
