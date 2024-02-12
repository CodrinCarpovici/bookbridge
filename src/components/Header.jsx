import React from "react";
import headerImg from "../assets/headerphoto.jpeg";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";

const Header = ({handleChange, handleSubmit, books, search}) => {
  return (
    <header
      className="header-background d-flex flex-column justify-content-center align-items-center text-center"
      style={{ backgroundImage: `url(${headerImg})`, height: "100vh" }}
    >
      <div>
        <h1 id="header-title">BOOK BRIDGE</h1>
        <h2 id="header-subtitle">
          Connect to the Stories That Shape Our World
        </h2>
      </div>
      <div className="w-100 d-flex justify-content-center mt-4">
        <SearchBar search={search} books={books} handleChange={handleChange} handleSubmit={handleSubmit}/>
        {books.map((book) => (<BookCard  key= {book.id} coverImg ={book.volumeInfo.imageLinks.thumbnail} title={book.title} author={books.authors} releaseYear={books.publishedDate} />) )}
      </div>
    </header>
  );
};

export default Header;
