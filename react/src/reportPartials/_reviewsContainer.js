import React, { Component } from "react";
import Review from "./_review.js";

class ReviewsContainer extends Component {
  render() {
    return (
      <div className="review-Container">
      <h2>{this.props.reviews.length} reviews</h2>
        {this.props.reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}

export default ReviewsContainer;
