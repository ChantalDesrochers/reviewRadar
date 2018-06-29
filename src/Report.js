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
    const topReviews = {
      title: 'Top Endorsements',
      content: reviews.slice(0,3)
    }
    const bottomReviews = {
    title: 'Top Critisms',
    content: reviews.slice(-3, reviews.length)
  }

    return (
      <div className="Report">
        <h1>Company Report</h1>
        <ReviewsContainer reviews={topReviews}/>
        <ReviewsContainer reviews={bottomReviews} />
        {/* <OverallSentimentChart reviews={bottomReviews} /> */}
        <br/>
        {/* <SentimentChart reviews={reviews} /> */}
      </div>
    );
  }
}

export default Report;
