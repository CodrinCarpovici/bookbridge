import React, { useState } from "react";
import { motion } from "framer-motion";

const dummyBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "to read",
    category: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "reading",
    category: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    status: "read",
    category: "Science Fiction",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    status: "to read",
    category: "Romance",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    status: "to read",
    category: "Fantasy",
  },
];

const Bookshelf = () => {
  const [books, setBooks] = useState(dummyBooks);

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
            whileHover={{ scale: 1 }}
          >
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Status: {book.status}</p>
            <select
              value={book.status}
              onChange={(e) => handleStatusChange(index, e.target.value)}
            >
              <option value="to read">To Read</option>
              <option value="reading">Reading</option>
              <option value="read">Read</option>
            </select>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
