// Bookshelf.js

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleStatusChange = (index, status) => {
    const updatedBooks = [...books];
    updatedBooks[index].status = status;
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };
  
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {books.map((book, index) => (
          <div
            key={book.id + "/Bookshelf"}
            className="card book-card col-lg-2 col-sm-12 m-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-img-container book-card-img-container"
            >
              <img
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : bookCoverDemo
                }
                alt="Book Cover"
                className="card-img book-card-img"
              />
              <div className={`card-hover-content ${book.status}`}>
                <h5 className="card-title book-card-title small-card">
                  {book.volumeInfo.title}
                </h5>
                <p className="card-text book-card-text small-card">
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : "Unknown"}
                </p>
                <p className="card-text book-card-text small-card">
                  {book.volumeInfo.publishedDate}
                </p>
                <select
                  value={book.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option value="to read">To Read</option>
                  <option value="reading">Reading</option>
                  <option value="read">Read</option>
                </select>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
