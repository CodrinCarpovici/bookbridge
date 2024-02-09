
import React from "react";
import ContactForm from "../ContactForm";

const About = () => {
  
  return (

    <div className="about-page">
      <div className="about-section">
        <h2>About</h2>
        <p className="about-subtitle">
          Welcome to Book Bridge - Your Chosen Online Library
        </p>
        </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 my-2 d-flex justify-content-center">
          <div className="card h-100">
          <img src="/src/assets/card1image.jpg" className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <h5 className="card-title">What is BookBridge?</h5>
              <p className="card-text"> BookBridge is a book library where you can search for your favorite books and find their details. You can also create your own list of must-read books.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 my-2 d-flex justify-content-center">
          <div className="card h-100">
          <img src="/src/assets/card2image.jpeg" className="card-img-top" alt="Image 2" />
            <div className="card-body">
              <h5 className="card-title">Where do I go from here?</h5>
              <p className="card-text">Perform a search, select a result, and you'll discover a compilation of libraries that have informed us they possess the resource you seek. From this point, you can either access openly available online content directly or follow a link to a nearby library.</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default About;



