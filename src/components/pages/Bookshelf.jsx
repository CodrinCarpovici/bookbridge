import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleStatusChange = (bookId, status) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, status };
      }
      return book;
    });
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  // Function to extract unique categories from books
  const extractCategories = () => {
    const categories = new Set();
    books.forEach((book) => {
      if (book.volumeInfo.categories) {
        book.volumeInfo.categories.forEach((category) => {
          categories.add(category);
        });
      }
    });
    return Array.from(categories);
  };

  // Function to filter books by category
  const filterBooksByCategory = (category) => {
    return books.filter((book) => {
      if (
        book.volumeInfo.categories &&
        book.volumeInfo.categories.includes(category)
      ) {
        return true;
      }
      return false;
    });
  };

  // Rendering books in a grid based on category
  const renderBooksGrid = (category) => {
    const filteredBooks = filterBooksByCategory(category);
    return (
      <div key={category} className="container">
        <h2 className="d-flex justify-content-center category-title my-4">
          {category}
        </h2>
        <div className="row">
          {filteredBooks.map((book) => (
            <div
              key={book.id + "/Bookshelf"}
              id="bookself-card"
              className="card book-card col-lg-2 col-md-3 col-sm-4 col-xs-12 mx-auto mx-md-1 mb-3"
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
                    onChange={(e) =>
                      handleStatusChange(book.id, e.target.value)
                    }
                  >
                    <option value="to-read">To Read</option>
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

  // Function to render books for all categories
  const renderBooksForAllCategories = () => {
    const categories = extractCategories();
    return categories.map((category, index) =>
      renderBooksGrid(category, index)
    );
  };

  return (
    <div className="bookshelf">
      <h1 className="d-flex justify-content-center bookshelf-title mt-4">
        My Bookshelf
      </h1>
      {renderBooksForAllCategories()}
    </div>
  );
};

export default Bookshelf;
