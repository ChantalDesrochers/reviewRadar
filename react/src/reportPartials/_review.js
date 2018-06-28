import React from "react";

const Review = ({ review }) => (
  <div key={review.id}>
    Author: {review.author}
    <br />
    Description: {review.description}
    <br />
    Date: {review.date}
    <br />
    Rating: {review.rating} | Overall: {review.overall}
    <br />
    <br />
  </div>
);

export default Review;
