import React from "react";
import bookCoverDemo from "../../assets/bookCoverDemo.jpeg";

const BookPage = ({handleChange, handleSubmit, books, search}) => {
  // // Mock data for demonstration
  // const mockBook = {
  //   title: "Sample Book Title",
  //   author: "John Doe",
  //   year: 1900,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tellus vitae massa posuere viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tellus vitae massa posuere viverra.",
  //   rating: 1, // Assuming this is a number out of 5
  // };

  // Function to render stars
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mt-4" id="main-content">
      <div className="row">
        <div className="col-md-4">
          {/* Book cover image */}
          <img
            src={bookCoverDemo}
            id="book-image"
            alt="Book Cover"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8" id="details-container">
          {/* Book details */}
          <h2 id="book-title">{books.title}</h2>
          <p id="book-author">
            <strong>Author:</strong> {books.author}
          </p>
          <p id="book-year">
            <strong>Year:</strong> {books.year}
          </p>
          <p id="book-description">
            <strong>Description:</strong> {books.description}
          </p>
          <div id="book-rating">
            <strong>Rating:</strong>
            <span className="ml-2">{renderStars(books.rating)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
