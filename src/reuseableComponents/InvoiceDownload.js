// src/components/Invoice.js
import React from 'react';
import { jsPDF } from 'jspdf';

const invoiceData = {
    invoiceNumber: '123',
    date: '2024-06-11',
    customerName: 'John Doe',
    items: [
      { name: 'Product A', price: 10 },
      { name: 'Product B', price: 20 },
    ],
  };
const Invoice = () => {
    const generateInvoice = () => {
        const doc = new jsPDF();

        doc.text('Invoice', 10, 10);
        doc.text(`Invoice Number: ${invoiceData?.invoiceNumber}`, 10, 20);
        doc.text(`Date: ${invoiceData?.date}`, 10, 30);
        doc.text(`Customer Name: ${invoiceData?.customerName}`, 10, 40);

        let yOffset = 50;
        invoiceData?.items?.forEach((item, index) => {
            doc.text(`Item: ${item.name} - $${item.price}`, 10, yOffset + (index * 10));
        });

        const total = invoiceData?.items.reduce((sum, item) => sum + item.price, 0);
        doc.text(`Total: $${total}`, 10, yOffset + (invoiceData?.items.length * 10) + 10);

        doc.save('invoice.pdf');
    };

    return (
        <div>
            <button onClick={generateInvoice}>Download Invoice</button>
        </div>
    );
};

export default Invoice;
