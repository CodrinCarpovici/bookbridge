import React, { useState } from "react";

const SearchBar = ({ search, handleChange, handleSubmit }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a book"
              value={search}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                type="button"
                onClick={handleSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
