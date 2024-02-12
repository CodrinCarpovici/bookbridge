import React from "react";
import Header from "../Header.jsx";

const Homepage = ({handleChange, handleSubmit, books, search}) => {
  return (
    <>
      <Header search={search} books={books} handleChange={handleChange} handleSubmit={handleSubmit} />
      
    </>
  );
};

export default Homepage;
