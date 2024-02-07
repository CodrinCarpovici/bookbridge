import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light ">
      <div className="container-fluid"></div>
      <a className="navbar-brand" href="#">
          <img className="logo" src="./images/logo.png" alt=" logo"/></a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <span className="navbar-toggler-icon"></span>
        <div className="collapse navbar-collapse" id="navbarNavDropdown"></div>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/book-page">Book Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/book-shelf">Book Shelf</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
