import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import book from "../assets/book.jpg";

const BookCard = ({ coverImg,title, author, releaseYear }) => {
  return (
    <div className="card">
      <Link to="/book-page">
        <motion.div whileHover={{ scale: 1.15 }}className="card-img-container">
          <img src={book} alt="Book Cover" className="card-img" />
          <div className="card-hover-content">
            <h5 className="card-title">{title}Harry Potter and the cursed child</h5>
            <p className="card-text">Author:  by J. K. Rowling, {author}</p>
            <p className="card-text">Year: 2016 {releaseYear}</p>
            <button className="btn btn-dark">Add</button>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default BookCard;
