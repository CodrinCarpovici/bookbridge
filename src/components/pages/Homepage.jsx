import React from "react";
import Header from "../Header.jsx";

const Homepage = ({handleChange, handleSubmit, books, search}) => {
  return (
    <div className="homepage">
      <Header search={search} books={books} handleChange={handleChange} handleSubmit={handleSubmit} />
      
    </div>
  );
};

export default Homepage;
