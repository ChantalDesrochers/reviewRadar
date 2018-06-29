import React, { Component } from "react";
import Review from "./_review.js";

class ReviewsContainer extends Component {
  render() {
    console.log(this.props.reviews)
    console.log(this.props.reviews.content.length)
    return (
      <div className="review-Container">
      <h2>{this.props.reviews.title} {this.props.reviews.content.length}</h2>
        {this.props.reviews.content.map((review, index) => (
          <Review review={review} key={index} />
        ))}
      </div>
    );
  }
}

export default ReviewsContainer;
