import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

class SentimentOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        {
          label: 'Negative',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#F37162',
          borderColor: '#E53A27',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#F37162',
          pointBackgroundColor: '#F37162',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Positive',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [20, 3, 5, 23, 55, 12, 4]
        }
        ]
      }
    }
  }


componentDidMount() {
var parseSentimentDatabyTime = () => {
  var january = {
  positive: 0,
  negative: 0
}
var february = {
  positive: 0,
  negative:0
}
var march = {
  positive: 0,
  negative: 0
}
var april = {
  positive: 0,
  negative: 0
}
var may = {
  positive: 0,
  negative:0
}
var june = {
  positive: 0,
  negative: 0
}
var july = {
  positive: 0,
  negative: 0
}
var august = {
  positive: 0,
  negative:0
}
var september = {
  positive: 0,
  negative: 0
}
var october = {
  positive: 0,
  negative: 0
}
var november = {
  positive: 0,
  negative: 0
}
var december = {
  positive: 0,
  negative:0
}

const reviews = this.state.reviews;
reviews.forEach(function(review) {
var month = review.datePublished.split('-')[1]
  if (month === "01" && review.label === "positive") {
    january.positive += 1
  }
  if (month === "01" && review.label === "negative") {
    january.negative += 1
}
if (month === "02" && review.label === "positive") {
  february.positive += 1
}
if (month === "02" && review.label === "negative") {
  february.positive += 1
}
if (month === "03" && review.label === "positive") {
  march.positive += 1
}
if (month === "03" && review.label === "negative") {
  march.positive += 1
}
if (month === "04" && review.label === "positive") {
  april.positive += 1
}
if (month === "04" && review.label === "negative") {
  april.positive += 1
}
if (month === "05" && review.label === "positive") {
  may.positive += 1
}
if (month === "05" && review.label === "negative") {
  may.positive += 1
}
if (month === "06" && review.label === "positive") {
  june.positive += 1
}
if (month === "06" && review.label === "negative") {
  june.positive += 1
}
if (month === "07" && review.label === "positive") {
  july.positive += 1
}
if (month === "07" && review.label === "negative") {
  july.positive += 1
}
if (month === "08" && review.label === "positive") {
  august.positive += 1
}
if (month === "08" && review.label === "negative") {
  august.positive += 1
}
if (month === "09" && review.label === "positive") {
  september.positive += 1
}
if (month === "09" && review.label === "negative") {
  september.positive += 1
}
if (month === "10" && review.label === "positive") {
  october.positive += 1
}
if (month === "10" && review.label === "negative") {
  october.positive += 1
}
if (month === "11" && review.label === "positive") {
  november.positive += 1
}
if (month === "11" && review.label === "negative") {
  november.positive += 1
}
if (month === "12" && review.label === "positive") {
  december.positive += 1
}
if (month === "12" && review.label === "negative") {
  december.positive += 1
}
})
var positive = [january.positive, february.positive, march.positive, april.positive, may.positive, june.positive, july.positive, august.positive, september.positive, october.positive, november.positive, december.positive];
var negative = [january.negative, february.negative, march.negative, april.negative, may.negative, june.negative, july.negative, august.negative, september.negative, october.negative, november.negative, december.negative];
console.log(positive)
console.log(negative)
this.setState({ ...this.state.data.datasets[0].data = negative, ...this.state.data.datasets[1].data = positive})
  }
parseSentimentDatabyTime()
}

  render() {

        return (
        <div className="sentiment-over-time">
       <Line data={this.state.data}/>
        </div>
        );
    }
}






export default SentimentOverTime;