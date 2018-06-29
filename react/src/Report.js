import React, { Component } from "react";
//import OverallSentimentChart from "./reportPartials/_overallSentimentChart";
import ReviewsContainer from "./reportPartials/_reviewsContainer";
//import SentimentChart from "./reportPartials/_sentimentChart";
// import Ratings from "./ratings.js"

// remove hardcoded reviews after database is online
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
   //reviews: Ratings
  reviews: []
    };
  }
componentDidMount(){
fetch('http://localhost:3001/1')
.then(results => { return results.json()  })
.then(results => {this.setState({reviews: results})
console.log('in report', this.state)
});

   
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
    const allReviews = {
    title: 'All reviews',
    content: reviews
  }

    return (
      <div className="Report">
        <h1>Pai Thai Reviews</h1>
        <ReviewsContainer reviews={allReviews}/>
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
