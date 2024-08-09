import React from "react";
import reviewsData from "../assets/reviewsData";
import "../styles/Reviews.css";

function Reviews() {
  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Customer Reviews</h1>
      {reviewsData.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <h3 className="review-name">{review.name}</h3>
            <span className="review-date">{review.date}</span>
          </div>
          <p className="review-text">{review.review}</p>
          <div className="review-rating">
            {"★".repeat(review.rateCount)}
            {"☆".repeat(5 - review.rateCount)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
