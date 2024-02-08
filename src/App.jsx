import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import About from './components/pages/About'
import BookPage from './components/pages/BookPage'
import Bookshelf from './components/pages/Bookshelf'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar';



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Homepage/>} />
      <Route path='/about' element={<About/>}/> 
      {/* <Route path='/book-page' element={<BookPage/>}/> */}
      <Route path='/book-shelf' element={<Bookshelf/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
