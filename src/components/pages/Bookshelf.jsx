import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {books.map((book, index) => (
          <div
            key={index}
            className="book"
            layout
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedBook(book)}
          >
            <img src={book.imageUrl} alt={book.title} />
            {selectedBook === book && (
              <div className="details">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>Category: {book.category}</p>
                <p>Status: {book.status}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
