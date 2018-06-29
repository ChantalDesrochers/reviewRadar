import React, { Component } from "react";
import Review from "./_review.js";

class TextContainer extends Component {
  render() {
    console.log(this.props.reviews)
    return (
      <div className="review-container">
      <h2>{this.props.reviews.title}</h2>
        {this.props.reviews.content.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}

export default TextContainer;
