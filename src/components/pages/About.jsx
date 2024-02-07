import React from "react";
import ContactForm from "../ContactForm";

const About = () => {
  return (
    <div className="about-page">
      <h2>About</h2>
      <p>
        Welcome to Book Bridge, a book library where you can search for your
        favorite books and find their details. You also have the ability to
        create your own list of must-read books.
      </p>

      <ContactForm />
    </div>
  );
};

export default About;
