import React from "react";
import aboutImage from "../images/about.jpg";
import LeadForm from "../components/LeadForm";

const About = () => {
  // Sample array of reviews
  const reviews = [
    {
      id: 1,
      name: "Mila A.",
      content: "The best price and best service",
      rating: 5,
    },
    {
      id: 2,
      name: "Rudy C.",
      content: "made everything so easy and a great price as well",
      rating: 5,
    },
    {
      id: 3,
      name: "Sebastian F.",
      content: "great guys moved everything quickly!",
      rating: 5,
    },
    // Add more reviews as needed
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Unicode for star symbol
    }
    return stars;
  };

  return (
    <div className="abouts-container">
      {/* Image section */}
      <div className="images-container">
        <img
          src={aboutImage}
          alt="About Sunny Movers"
          className="abouts-image"
        />
      </div>

      {/* Content section */}
      <div className="contents-container">
        <div className="abouts-info">
          <h2>About Sunny Movers</h2>
          <p>
            Sunny Movers: Your Trusted Partner for Stress-Free Moving Solutions.
            With years of industry experience, we pride ourselves on delivering
            exceptional moving services tailored to your unique needs. Our
            dedicated team ensures a seamless and stress-free experience for
            every client, whether it's a local move or a long-distance
            relocation, residential or commercial. At Sunny Movers, customer
            satisfaction is paramount. Let us take the hassle out of your next
            move and ensure a smooth transition to your new destination.
          </p>
        </div>
        <div className="aboutform-container">
          <LeadForm />
        </div>
      </div>

      {/* Customer reviews section */}
      <div className="customer-reviews">
        <h2 className="reviews-heading">Customer Reviews</h2>
        <div className="review-columns">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.name}</h3>
              <div className="star-rating">{renderStars(review.rating)}</div>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
