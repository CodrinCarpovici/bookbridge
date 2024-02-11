import React, { useState } from 'react';

const SearchBar = ({books,search, handleChange,handleSubmit}) => {

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
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button" onClick={handleSubmit}>
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
