import React, { Component } from "react";

class OverallSentimentChart extends Component {
  render() {
    let totalPositive = 0;
    let totalNegative = 0;
    this.props.reviews.forEach(function(review) {
      if (review.label === 'negative'){
        totalNegative += review.score;
      } else if (review.label === 'positive'){
        totalPositive += review.score
      }
    });
    return (
      <div className="positivity">
        <h2>Overall Sentiment Chart</h2>
        <div className="chart">
        *chart placeholder*
        </div>
        average positivity: {totalPositive / this.props.reviews.length}
        <br />average negativity: {totalNegative / this.props.reviews.length}
      </div>
    );
  }
}

export default OverallSentimentChart;
