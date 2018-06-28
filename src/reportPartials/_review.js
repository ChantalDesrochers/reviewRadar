import React from "react";

const Review = ({ review }) => (
  <div key={review.id}>
    Author: {review.author}
    <br />
    Description: {review.description}
    <br />
    Date: {review.datePublished}
    <br />
    Rating: {review.rating} | Overall: {review.score}
    <br />
    <br />
  </div>
);

export default Review;
