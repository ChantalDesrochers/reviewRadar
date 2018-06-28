import React, { Component } from "react";
import OverallSentimentChart from "./reportPartials/_overallSentimentChart";
import ReviewsContainer from "./reportPartials/_reviewsContainer";
import SentimentChart from "./reportPartials/_sentimentChart";
import Ratings from "./ratings.js"

// remove hardcoded reviews after database is online
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings
  
    };
  }
  render() {
    const { reviews } = this.state;
    return (
      <div className="Report">
        <h1>Company Report</h1>
        <ReviewsContainer reviews={reviews} />
        <OverallSentimentChart reviews={reviews} />
        <br/>
        {/* <SentimentChart reviews={reviews} /> */}
      </div>
    );
  }
}

export default Report;
