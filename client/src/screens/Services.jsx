import React from "react";
import localMoveImage from "../images/local_move.jpg";
import commercialMoveImage from "../images/commercial.jpg";
import storageImage from "../images/storage.jpg";
import furniture from "../images/furniture.jpg";
import longdis from "../images/long_distance.jpg";
import packing from "../images/packing.jpg";
import floridaImage from "../images/florida.jpg";

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
            Experience smooth and stress-free residential moving solutions
            customized to your needs. Our expert team guarantees a seamless
            transition, from meticulous packing to punctual delivery. Trust us
            to handle your belongings with care and precision, ensuring a breezy
            move for you.
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
            Discover streamlined commercial moving solutions for your business
            transition. Our expert team minimizes disruption, offering tailored
            plans and flexible scheduling to meet your needs. Trust us for a
            seamless move that keeps your business operations running smoothly.
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
            Explore secure, convenient storage solutions customized to your
            needs. Our facilities boast 24/7 surveillance and climate-controlled
            units for maximum protection. Flexible rental options guarantee
            affordability and convenience. Store with confidence and reclaim
            your space today
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
            Planning a long-distance move across states? Look no further than
            our specialized long-distance service. With meticulous planning and
            expert execution, we guarantee a seamless transition to your new
            destination. Trust us with the logistics, and embark on your journey
            worry-free.
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
            Experience expert furniture moving solutions tailored to your
            specific needs. Our dedicated team ensures the safe and efficient
            transportation of your furniture, from bulky items to delicate
            pieces. With meticulous handling and specialized equipment, we
            guarantee a seamless move for your cherished belongings.
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
            Discover efficient, reliable packing services designed for your
            needs. Our expert team guarantees careful handling and secure
            packaging of your belongings, offering peace of mind throughout your
            move. Let us take care of the packing, allowing you to settle into
            your new home with ease
          </p>
        </div>
      </div>
      {/* Coverage Section */}
      <div
        className="coverages-section"
        style={{ backgroundImage: `url(${floridaImage})` }}
      >
        <h2 className="coverage-heading">Locations we serve</h2>
        <div className="city-cards">
          <div className="city-card">
            <h3>Aventura</h3>
            <p>33160-33180</p>
          </div>
          <div className="city-card">
            <h3>Boca Raton</h3>
            <p>33427-33486</p>
          </div>
          <div className="city-card">
            <h3>Boynton Beach</h3>
            <p>33424-33483</p>
          </div>
          <div className="city-card">
            <h3>Brickell</h3>
            <p>33129-33131</p>
          </div>
          <div className="city-card">
            <h3>Coral Springs</h3>
            <p>33063-33077</p>
          </div>
          <div className="city-card">
            <h3>Coconut Creek</h3>
            <p>33063-33097</p>
          </div>
          <div className="city-card">
            <h3>Davie</h3>
            <p>33024-33355</p>
          </div>
          <div className="city-card">
            <h3>Deerfield Beach</h3>
            <p>33064-33443</p>
          </div>
          <div className="city-card">
            <h3>Delray Beach</h3>
            <p>33444-33484</p>
          </div>
          <div className="city-card">
            <h3>Fort Lauderdale</h3>
            <p>33301-33394</p>
          </div>
          <div className="city-card">
            <h3>Hialeah</h3>
            <p>33002-33147</p>
          </div>
          <div className="city-card">
            <h3>Hollywood</h3>
            <p>33004-33316</p>
          </div>
          <div className="city-card">
            <h3>Homestead</h3>
            <p>33030-33090</p>
          </div>
          <div className="city-card">
            <h3>Jupiter</h3>
            <p>33410-33478</p>
          </div>
          <div className="city-card">
            <h3>Lauderhill</h3>
            <p>33311-33351</p>
          </div>
          <div className="city-card">
            <h3>Margate</h3>
            <p>33063-33093</p>
          </div>
          <div className="city-card">
            <h3>Miami</h3>
            <p>33101-33255</p>
          </div>
          <div className="city-card">
            <h3>Miami Beach</h3>
            <p>33109-33299</p>
          </div>
          <div className="city-card">
            <h3>Miami Gardens</h3>
            <p>33014-33269</p>
          </div>
          <div className="city-card">
            <h3>Miramar</h3>
            <p>33023-33029</p>
          </div>
          <div className="city-card">
            <h3>North Miami</h3>
            <p>33154-33181</p>
          </div>
          <div className="city-card">
            <h3>Pembroke Pines</h3>
            <p>33023-33332</p>
          </div>
          <div className="city-card">
            <h3>Plantation</h3>
            <p>33313-33388</p>
          </div>
          <div className="city-card">
            <h3>Pompano Beach</h3>
            <p>33060-33074</p>
          </div>
          <div className="city-card">
            <h3>Princeton</h3>
            <p>33032-33170</p>
          </div>
          <div className="city-card">
            <h3>Sunny Isles Beach</h3>
            <p>33160</p>
          </div>
          <div className="city-card">
            <h3>Tamarac</h3>
            <p>33068-33359</p>
          </div>
          <div className="city-card">
            <h3>Wellington</h3>
            <p>33411-33470</p>
          </div>
          <div className="city-card">
            <h3>West Palm Beach</h3>
            <p>33401-33417</p>
          </div>
          <div className="city-card">
            <h3>Weston</h3>
            <p>33326-33332</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
