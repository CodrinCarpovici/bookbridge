import React from "react";

const BookPage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          {/* Book cover image */}
          <img src={coverImage} alt="Book Cover" className="img-fluid" />
        </div>
        <div className="col-md-8">
          {/* Book details */}
          <h2>{title}</h2>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Plot:</strong> {plot}
          </p>
        </div>
      </div>
      <div className="row">
        <h4 className="mt-4">Amazon Suggestions</h4>
        {/* Placeholder for Amazon suggestions */}
        <div className="col-6 col-md-4">
          <div className="card">
            <div className="card-body">Suggestion 1</div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card">
            <div className="card-body">Suggestion 2</div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card">
            <div className="card-body">Suggestion 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
