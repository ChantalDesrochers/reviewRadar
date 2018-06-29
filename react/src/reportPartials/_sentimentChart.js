import React, { Component } from "react";

class SentimentChart extends Component {
  render() {
    let total = {
      joy: 0,
      fear: 0,
      sadness: 0,
      disgust: 0,
      anger: 0
    };
    this.props.reviews.forEach(function(review) {
      total.joy += review.sentiment.joy;
      total.fear += review.sentiment.fear;
      total.sadness += review.sentiment.sadness;
      total.disgust += review.sentiment.disgust;
      total.anger += review.sentiment.anger;
    });
    return (
      <div className="sentiment">
        <h2>sentimentChart</h2>
        <div className="chart">
        *chart placeholder*
        </div>
        average joy: {(total.joy / this.props.reviews.length).toFixed(2)}
        <br/>average fear: {(total.fear / this.props.reviews.length).toFixed(2)}
        <br/>average sadness: {(total.sadness / this.props.reviews.length).toFixed(2)}
        <br/>average disgust: {(total.disgust / this.props.reviews.length).toFixed(2)}
        <br/>average anger: {(total.anger / this.props.reviews.length).toFixed(2)}
      </div>
    );
  }
}

export default SentimentChart;
