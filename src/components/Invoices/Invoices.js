import React from 'react';
import InvoiceItem from './InvoiceItem';

const Invoices = () => {
  // Example data
  const invoices = [
    { id: 1, title: 'Invoice 1', amount: 100 },
    { id: 2, title: 'Invoice 2', amount: 200 },
    // Add more invoices as needed
  ];

  return (
    <div>
      <h2>Invoices</h2>
      {invoices.map(invoice => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
