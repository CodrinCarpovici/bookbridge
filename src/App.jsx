import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import BookPage from "./components/pages/BookPage";
import Bookshelf from "./components/pages/Bookshelf";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const apiKey = "AIzaSyBaXf-WaFNjuXH_bgd4jUptijqnQjKFmMk";

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  const fetchData = () => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data.items);
        console.log(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (search !== "") {
      fetchBooks();
    }
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              search={search}
              books={books}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/book-page" element={<BookPage />} />
        <Route path="/book-shelf" element={<Bookshelf />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
