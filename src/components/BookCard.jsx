import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import book from "../assets/book.jpg";

const BookCard = ({ books, coverImg, title, author, releaseYear, bookId }) => {
  const addToBookshelf = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const selectedBook = books.find((book) => book.id === bookId);
    localStorage.setItem(
      "books",
      JSON.stringify([...storedBooks, selectedBook])
    );
  };
  return (
    <div className="card book-card col-lg-2 col-sm-12 m-1">
      <Link className="book-card-link" to={`/book-page/${bookId}`}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="card-img-container book-card-img-container"
        >
          <img
            src={coverImg}
            alt="Book Cover"
            className="card-img book-card-img"
          />
          <div className="card-hover-content">
            <h5 className="card-title book-card-title">{title}</h5>
            <p className="card-text book-card-text">{author}</p>
            <p className="card-text book-card-text">{releaseYear}</p>
            <button className="btn btn-dark" onClick={addToBookshelf}>Add to Bookshelf</button>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default BookCard;
