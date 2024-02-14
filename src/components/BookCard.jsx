import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import book from "../assets/book.jpg";

const BookCard = ({ books, coverImg, title, author, releaseYear, bookId }) => {
  return (
    <div className="card col-lg-2 col-md-3 col-sm-4 col-xs-12 m-1 ">
      <Link className="book-card-link" to={`/book-page/${bookId}`}>
        <motion.div whileHover={{ scale: 1.1 }} className="card-img-container book-card-img-container">
          <img src={coverImg} alt="Book Cover" className="card-img book-card-img" />
          <div className="card-hover-content">
            <h5 className="card-title book-card-title small-card">{title}</h5>
            <p className="card-text book-card-text small-card">{author}</p>
            <p className="card-text book-card-text small-card">{releaseYear}</p>
            <button className="btn btn-dark">Add to Bookshelf</button>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default BookCard;
