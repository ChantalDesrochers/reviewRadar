import React, { Component } from "react";
import Review from "./_review.js";

class ReviewsContainer extends Component {
  render() {
    console.log(this.props.reviews)
    return (
      <div className="review-Container">
      <h2>{this.props.reviews.title} {this.props.reviews.content.length}</h2>
        {this.props.reviews.content.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}

export default ReviewsContainer;
