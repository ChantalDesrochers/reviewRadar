import React from "react";

const Review = ({ review }) => (
  <div className="review" key={review.id}>   
   <br />
    Description: {review.description}
    <br />
    Date: {review.datePublished}
    <br />
    Author: {review.author}
    <br />
    Rating: {review.rating} | Overall: {review.score}
    <br />   
  </div>
);

export default Review;
