import React, { Component } from "react";
import Review from "./_review.js";
import Typography from '@material-ui/core/Typography';
class TextContainer extends Component {
  render() {
    // console.log(this.props.reviews)
    return (
      <div >
      <h2 className="review-title"  data-message={this.props.dataMessageTitle} onClick={this.props.clickHandler}>{this.props.dataMessageTitle}</h2>
        {this.props.reviews.content.map(review => (
          <Review review={review} key={review.id} />
          
        ))}
      </div>
    );
  }
}

export default TextContainer;
