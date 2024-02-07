import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '../components/pages/Homepage';
import About from '../components/pages/About';
import BookPage from '../components/pages/BookPage';
import Bookshelf from '../components/pages/Bookshelf';


// Tests if App renders without issues
it('App Component Renders Without Error', () => {
    render(<App />);
});

it('Header Component Renders Without Error', () => {
  render(
      <Router>
          <Header />
      </Router>
  );
});

it('Footer Component Renders Without Error', () => {
  render(<Footer />);
});

it('Homepage Component Renders Without Error', () => {
  render(<Homepage />);
});

it('About Component Renders Without Error', () => {
  render(<About />);
});

it('BookPage Component Renders Without Error', () => {
  render(<BookPage />);
});

it('Bookshelf Component Renders Without Error', () => {
  render(<Bookshelf />);
});


