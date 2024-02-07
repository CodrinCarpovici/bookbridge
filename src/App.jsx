import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/pages/Homepage'
import About from './components/pages/About'
import BookPage from './components/pages/BookPage'
import Bookshelf from './components/pages/Bookshelf'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Footer />
    </>
  )
}

export default App
