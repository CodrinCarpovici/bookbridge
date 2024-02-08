import React from 'react';
import { Link } from 'react-router-dom';
import  Navbar from './Navbar';
import headerImg from '../assets/headerphoto.jpeg';

const Header = () => {
  return (
    <header id="header">
      <img id="header-image" src= {headerImg} alt="Book" />
      <h1 id="header-title">BOOK BRIDGE</h1>
      <h2 id="header-subtitle">Search for your book.</h2>
    </header>
  );
};

export default Header;