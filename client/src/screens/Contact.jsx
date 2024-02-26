import React from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import backgroundImage from "../images/moving.jpg";

const Contact = () => {
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
    <div className="contact-container">
      <img
        src={backgroundImage}
        alt="Contact Background"
        className="contact-background"
      />
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contactinfo-container">
          <div className="contact-form-card">
            <div className="contact-form">
              <LeadForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
        <div className="contact-info">
          <h2>Our Information</h2>
          <p>
            <strong>Phone:</strong> +1 (609)787-1878
          </p>
          <p>
            <strong>Email:</strong> SunnyMoverFL@gmail.com
          </p>
          <p>
            <strong>Business Hours:</strong> Mon-Sun: 8am - 8pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
