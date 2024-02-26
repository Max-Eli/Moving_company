import React from "react";
import movingImage from "../images/moving.jpg";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import localMoveImage from "../images/local_move.jpg";
import longDistanceImage from "../images/commercial.jpg";
import packingImage from "../images/storage.jpg";
import floridaImage from "../images/florida.jpg"; // New photo of Florida

const Home = () => {
  const handleSubmit = async (leadData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/leads",
        leadData
      );
      if (response.status === 201) {
        console.log("Lead submitted successfully");
      } else {
        console.error("Lead submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={movingImage} alt="Moving Company" className="home-image" />
        <div className="slogan-container">
          <h1 className="slogan-text">Your Trusted Moving Partner</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="quote-form-container">
          <div className="quote-card">
            <h2 className="quote-heading">Get a Free Quote</h2>
            <LeadForm onSubmit={handleSubmit} />
          </div>
        </div>

        {/* About Us Section */}
        <div className="company-section">
          <div className="company-info">
            <h2>Sunny Movers Guarantee!</h2>
            <p>
              We are a reliable and professional moving company dedicated to
              making your move stress-free. With years of experience, we
              guarantee a fast and easy move for you and your family. Our team
              of skilled movers will handle your belongings with care and ensure
              they arrive safely at your new home.
            </p>
          </div>
          <div className="photo-grid">
            <img src={photo1} alt="Photo 1" />
            <img src={photo2} alt="Photo 2" />
            <img src={photo3} alt="Photo 3" />
            <img src={photo4} alt="Photo 4" />
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="service-card">
            <img src={localMoveImage} alt="Local Move" />
            <p>
              <strong>Local Moves</strong>
            </p>
            <p>
              Smooth and stress-free residential moving solutions tailored to
              your needs. Our expert team ensures a seamless transition, from
              careful packing to timely delivery. Trust us to handle your
              belongings with care and precision, making your move a breeze.
            </p>
          </div>
          <div className="service-card">
            <img src={longDistanceImage} alt="Long Distance Move" />
            <p>
              <strong>Commercial Moving</strong>
            </p>
            <p>
              Streamlined commercial moving solutions for your business
              transition. Our expert team ensures minimal disruption, providing
              tailored plans and flexible scheduling to meet your needs. Trust
              us for a seamless move that keeps your business operations running
              smoothly.
            </p>
          </div>
          <div className="service-card">
            <img src={packingImage} alt="Packing Services" />
            <p>
              <strong>Storage Services</strong>
            </p>
            <p>
              Secure, convenient storage solutions tailored to your needs. Our
              facilities offer 24/7 surveillance and climate-controlled units
              for maximum protection. Flexible rental options ensure
              affordability and convenience. Store with confidence and reclaim
              your space today!
            </p>
          </div>
        </div>
        {/* Coverage Section */}
        <div
          className="coverage-section"
          style={{ backgroundImage: `url(${floridaImage})` }}
        >
          <h2 className="coverage-heading">Locations we serve</h2>
          <div className="city-cards">
            <div className="city-card">
              <h3>Sunny Isles</h3>
            </div>
            <div className="city-card">
              <h3>North Miami</h3>
            </div>
            <div className="city-card">
              <h3>Miami</h3>
            </div>
            <div className="city-card">
              <h3>Fort Lauderdale</h3>
            </div>
            <div className="city-card">
              <h3>Brickell</h3>
            </div>
            <div className="city-card">
              <h3>West Palm Beach</h3>
            </div>
            <div className="city-card">
              <h3>Aventura</h3>
            </div>
            <div className="city-card">
              <h3>Boca Raton</h3>
            </div>
            <div className="city-card">
              <h3>Hallendale Beach</h3>
            </div>
            <div className="city-card">
              <h3>Hollywood</h3>
            </div>
            <div className="city-card">
              <h3>Homestead</h3>
            </div>
            <div className="city-card">
              <h3>Pembroke Pines</h3>
            </div>
            <div className="city-card">
              <h3>Plantation</h3>
            </div>
            <div className="city-card">
              <h3>Hialeah</h3>
            </div>
            <div className="city-card">
              <h3>Pompano Beach</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
