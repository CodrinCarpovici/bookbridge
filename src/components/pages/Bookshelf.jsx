import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleStatusChange = (index, status) => {
    const updatedBooks = [...books];
    updatedBooks[index].status = status;
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {books.map((book, index) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
