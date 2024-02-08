import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ coverImg, title, author, releaseYear }) => {
  return (
    <div className="card">
      <Link to="/book-page">
        <img src={coverImg} className="card-img-top" alt="Book Cover" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Year: {releaseYear}</p>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default BookCard;