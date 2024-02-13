
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
        <div className="col-sm-12 col-md-4 my-2 d-flex justify-content-center">
          <div className="card h-100 about-card">
          <img src="/src/assets/card1image.jpg" className="card-img-top about-card-img" alt="Image 1" />
            <div className="card-body about-card-body" >
              <h5 className="card-title about-card-title">What is BookBridge?</h5>
              <p className="card-text about-card-text"> Discover a vast online book library at our website. Search for any book and explore details including author name, title, rating, and more. Dive into a world of literature with ease and convenience.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2 d-flex justify-content-center">
          <div className="card h-100 about-card">
          <img src="src/assets/second-card.jpeg" className="card-img-top about-card-img" alt="Image 2" />
            <div className="card-body about-card-body">
              <h5 className="card-title about-card-title">Who is BookBridge for?</h5>
              <p className="card-text about-card-text"> Empower your mind with our book library website, a versatile resource for students, professionals, and book lovers alike. Dive into captivating narratives, enrich your studies, and explore endless learning opportunities at your fingertips.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2 d-flex justify-content-center">
          <div className="card h-100 about-card">
          <img src="src/assets/third-card.jpeg" className="card-img-top about-card-img" alt="Image 3" />
            <div className="card-body about-card-body">
              <h5 className="card-title about-card-title">Where do I go from here?</h5>
              <p className="card-text about-card-text">Perform a search, select a result, and you'll discover a compilation of libraries that have informed us they possess the resource you seek. From this point, you can either access openly available online content directly or follow a link to a nearby library.</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default About;



