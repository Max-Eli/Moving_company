import React from "react";
import localMoveImage from "../images/local_move.jpg";
import commercialMoveImage from "../images/commercial.jpg";
import storageImage from "../images/storage.jpg";
import furniture from "../images/furniture.jpg";
import longdis from "../images/long_distance.jpg";
import packing from "../images/packing.jpg";

const Services = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">Relocation and Storage</h1>
      <h2 className="service-subheading">Our Services</h2>
      <div className="services-cards">
        <div className="services-card">
          <img
            src={localMoveImage}
            alt="Local Moves"
            className="services-image"
          />
          <h3 className="services-title">Local Moves</h3>
          <p className="services-description">
            Smooth and stress-free residential moving solutions tailored to your
            needs. Our expert team ensures a seamless transition, from careful
            packing to timely delivery. Trust us to handle your belongings with
            care and precision, making your move a breeze.
          </p>
        </div>
        <div className="services-card">
          <img
            src={commercialMoveImage}
            alt="Commercial Moving"
            className="services-image"
          />
          <h3 className="services-title">Commercial Moving</h3>
          <p className="services-description">
            Streamlined commercial moving solutions for your business
            transition. Our expert team ensures minimal disruption, providing
            tailored plans and flexible scheduling to meet your needs. Trust us
            for a seamless move that keeps your business operations running
            smoothly.
          </p>
        </div>
        <div className="services-card">
          <img
            src={storageImage}
            alt="Storage Services"
            className="services-image"
          />
          <h3 className="services-title">Storage Services</h3>
          <p className="services-description">
            Secure, convenient storage solutions tailored to your needs. Our
            facilities offer 24/7 surveillance and climate-controlled units for
            maximum protection. Flexible rental options ensure affordability and
            convenience. Store with confidence and reclaim your space today!
          </p>
        </div>
        <div className="services-card">
          <img
            src={longdis}
            alt="Storage Services"
            className="services-image"
          />
          <h3 className="services-title">Long Distance</h3>
          <p className="services-description">
            Relocating across states? Our long-distance service is your
            solution. With careful planning and expert execution, we ensure a
            smooth transition to your new destination. Leave the logistics to
            us, and embark on your journey worry-free.
          </p>
        </div>
        <div className="services-card">
          <img
            src={furniture}
            alt="Storage Services"
            className="services-image"
          />
          <h3 className="services-title">Furniture Moving</h3>
          <p className="services-description">
            Expert furniture moving solutions customized to your requirements.
            Our dedicated team ensures safe and efficient transportation of your
            furniture, from bulky items to delicate pieces. With careful
            handling and specialized equipment, we guarantee a seamless move for
            your cherished belongings
          </p>
        </div>
        <div className="services-card">
          <img
            src={packing}
            alt="Storage Services"
            className="services-image"
          />
          <h3 className="services-title">Packing Services</h3>
          <p className="services-description">
            Efficient, reliable packing services tailored to your needs. Our
            expert team ensures careful handling and secure packaging of your
            belongings, providing peace of mind throughout your move. Let us
            handle the packing so you can focus on settling into your new home
            with ease
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
