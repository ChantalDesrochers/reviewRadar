import React, { Component } from "react";
import PositivityChart from "./reportPartials/_positivityChart";
import ReviewsContainer from "./reportPartials/_reviewsContainer";
import SentimentChart from "./reportPartials/_sentimentChart";

// remove hardcoded reviews after database is online
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: 1,
          author: "Jaco",
          description: "Good Food",
          sentiment: {
            joy: 0.78,
            fear: 0.12,
            sadness: 0.2,
            disgust: 0.05,
            anger: 0.4
          },
          date: "June 28th",
          rating: 4,
          overall: 0.78
        },
        {
          id: 2,
          author: "Jacob",
          description: "Bad Food",
          sentiment: {
            joy: 0.38,
            fear: 0.52,
            sadness: 0.32,
            disgust: 0.2,
            anger: 0.8
          },
          date: "June 28th",
          rating: 2,
          overall: 0.2
        },
        {
          id: 3,
          author: "Jacob2",
          description: "Okay Food",
          sentiment: {
            joy: 0.38,
            fear: 0.52,
            sadness: 0.32,
            disgust: 0.2,
            anger: 0.8
          },
          date: "June 28th",
          rating: 3,
          overall: 0.5
        },
        {
          id: 4,
          author: "Jacoby",
          description: "Bad Food",
          sentiment: {
            joy: 0.38,
            fear: 0.52,
            sadness: 0.32,
            disgust: 0.2,
            anger: 0.8
          },
          date: "June 28th",
          rating: 1,
          overall: 0.1
        },
      ]
    };
  }
  render() {
    const { reviews } = this.state;
    return (
      <div className="Report">
        <h1>Company Report</h1>
        <ReviewsContainer reviews={reviews} />
        <PositivityChart reviews={reviews} />
        <br/>
        <SentimentChart reviews={reviews} />
      </div>
    );
  }
}

export default Report;
