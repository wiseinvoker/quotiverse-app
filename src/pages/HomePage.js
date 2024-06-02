// src/components/Quotes/QuotesList.jsx

import React from 'react';

const HomePage = () => {
  const quotes = [
    { id: 1, content: 'Quote 1' },
    { id: 2, content: 'Quote 2' },
    { id: 3, content: 'Quote 3' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id} className="mb-2 p-2 bg-gray-100 rounded">
            {quote.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
