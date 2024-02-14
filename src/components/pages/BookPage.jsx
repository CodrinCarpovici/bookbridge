import React from "react";
import bookCoverDemo from "../../assets/bookCoverDemo.jpeg";
import { useParams } from "react-router-dom";

const BookPage = ({ handleChange, handleSubmit, books, search }) => {
  const { bookId } = useParams();
  const selectedBook = books.find((book) => book.id === bookId);

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

  const addToBookshelf = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    localStorage.setItem("books", JSON.stringify([...storedBooks, selectedBook]));
  };

  console.log(selectedBook.volumeInfo.averageRating);
  return (
    <div className="container mt-4" id="main-content">
      <div className="row">
        <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
          {/* Book cover image */}
          <img
            src={
              selectedBook.volumeInfo.imageLinks
                ? selectedBook.volumeInfo.imageLinks.thumbnail
                : bookCoverDemo
            }
            id="book-image"
            alt="Book Cover"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8" id="details-container">
          {/* Book details */}
          <h2 id="book-title">{selectedBook.volumeInfo.title}</h2>
          <p id="book-author">
            <strong>Author:</strong>{" "}
            {selectedBook.volumeInfo.authors
              ? selectedBook.volumeInfo.authors[0]
              : "Unknown"}
          </p>
          <p id="book-year">
            <strong>Year:</strong> {selectedBook.volumeInfo.publishedDate}
          </p>
          <p id="book-description">
            <strong>Description:</strong> {selectedBook.volumeInfo.description}
          </p>
          <div id="book-rating">
            <strong>Rating:</strong>
            <span className="ml-2">
              {renderStars(
                selectedBook.volumeInfo.averageRating
                  ? selectedBook.volumeInfo.averageRating
                  : 3
              )}
            </span>
          </div>
          {/* Add to Bookshelf button */}
          <button
            className="btn btn-primary mt-3"
            onClick={addToBookshelf}
            id="button-shelf"
          >
            Add to Book Shelf
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
