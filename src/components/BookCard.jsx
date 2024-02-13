import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import book from "../assets/book.jpg";


const BookCard = ({ books,coverImg,title, author, releaseYear }) => {
  return (
    <div className="card col-lg-2 col-sm-12 m-1">
      <Link to="/book-page">
        <motion.div whileHover={{ scale: 1.5 }}className="card-img-container">
          
          <img src={coverImg} alt="Book Cover" className="card-img" />
          <div className="card-hover-content">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{author}</p>
            <p className="card-text">{releaseYear}</p>
            <button className="btn btn-dark">Add</button>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default BookCard;
