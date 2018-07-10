import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import 'typeface-roboto'

class SentimentOverSiteDivide extends Component {
  constructor(props) {
    super(props);
  }


  parseSentimentDatabyTime = (reviews) => {
    var january = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var february = {
    positive: 0,
    negative:0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var march = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var april = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var may = {
    positive: 0,
    negative:0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var june = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var july = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var august = {
    positive: 0,
    negative:0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var september = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var october = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var november = {
    positive: 0,
    negative: 0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }
  var december = {
    positive: 0,
    negative:0,
    ypositive: 0,
    ynegative: 0,
    tpositive: 0,
    tnegative: 0
  }


    reviews.forEach(function(review) {
      var month = review.datePublished.split('-')[1]
      if (month === "01" && review.label === "positive") {
        january.positive += 1
      }
      if (month === "01" && review.label === "negative") {
        january.negative += 1
      }
      if (month === "01" && review.label === "positive" && review.origin === 'Yelp') {
        january.ypositive += 1
      }
      if (month === "01" && review.label === "negative" && review.origin === 'Yelp') {
        january.ynegative += 1
      }
      if (month === "01" && review.label === "positive" && review.origin === 'TripAdvisor') {
        january.tpositive += 1
      }
      if (month === "01" && review.label === "negative" && review.origin === 'TripAdvisor') {
        january.tnegative += 1
      }
      if (month === "02" && review.label === "positive") {
        february.positive += 1
      }
      if (month === "02" && review.label === "negative") {
        february.negative += 1
      }
      if (month === "02" && review.label === "positive" && review.origin === 'Yelp') {
        february.ypositive += 1
      }
      if (month === "02" && review.label === "negative" && review.origin === 'Yelp') {
        february.ynegative += 1
      }
      if (month === "02" && review.label === "positive" && review.origin === 'TripAdvisor') {
        february.tpositive += 1
      }
      if (month === "02" && review.label === "negative" && review.origin === 'TripAdvisor') {
        february.tnegative += 1
      }
      if (month === "03" && review.label === "positive") {
        march.positive += 1
      }
      if (month === "03" && review.label === "negative") {
        march.negative += 1
      }
      if (month === "03" && review.label === "positive" && review.origin === 'Yelp') {
        march.ypositive += 1
      }
      if (month === "03" && review.label === "negative" && review.origin === 'Yelp') {
        march.ynegative += 1
      }
      if (month === "03" && review.label === "positive" && review.origin === 'TripAdvisor') {
        march.tpositive += 1
      }
      if (month === "03" && review.label === "negative" && review.origin === 'TripAdvisor') {
        march.tnegative += 1
      }
      if (month === "04" && review.label === "positive") {
        april.positive += 1
      }
      if (month === "04" && review.label === "negative") {
        april.negative += 1
      }
      if (month === "04" && review.label === "positive" && review.origin === 'Yelp') {
        april.ypositive += 1
      }
      if (month === "04" && review.label === "negative" && review.origin === 'Yelp') {
        april.ynegative += 1
      }
      if (month === "04" && review.label === "positive" && review.origin === 'TripAdvisor') {
        april.tpositive += 1
      }
      if (month === "04" && review.label === "negative" && review.origin === 'TripAdvisor') {
        april.tnegative += 1
      }
      if (month === "05" && review.label === "positive") {
        may.positive += 1
      }
      if (month === "05" && review.label === "negative") {
        may.negative += 1
      }
      if (month === "05" && review.label === "positive" && review.origin === 'Yelp') {
        may.ypositive += 1
      }
      if (month === "05" && review.label === "negative" && review.origin === 'Yelp') {
        may.ynegative += 1
      }
      if (month === "05" && review.label === "positive" && review.origin === 'TripAdvisor') {
        may.tpositive += 1
      }
      if (month === "05" && review.label === "negative" && review.origin === 'TripAdvisor') {
        may.tnegative += 1
      }
      if (month === "06" && review.label === "positive") {
        june.positive += 1
      }
      if (month === "06" && review.label === "negative") {
        june.negative += 1
      }
      if (month === "06" && review.label === "positive" && review.origin === 'Yelp') {
        june.ypositive += 1
      }
      if (month === "06" && review.label === "negative" && review.origin === 'Yelp') {
        june.ynegative += 1
      }
      if (month === "06" && review.label === "positive" && review.origin === 'TripAdvisor') {
        june.tpositive += 1
      }
      if (month === "06" && review.label === "negative" && review.origin === 'TripAdvisor') {
        june.tnegative += 1
      }
      if (month === "07" && review.label === "positive") {
        july.positive += 1
      }
      if (month === "07" && review.label === "negative") {
        july.negative += 1
      }
      if (month === "07" && review.label === "positive" && review.origin === 'Yelp') {
        july.ypositive += 1
      }
      if (month === "07" && review.label === "negative" && review.origin === 'Yelp') {
        july.ynegative += 1
      }
      if (month === "07" && review.label === "positive" && review.origin === 'TripAdvisor') {
        july.tpositive += 1
      }
      if (month === "07" && review.label === "negative" && review.origin === 'TripAdvisor') {
        july.tnegative += 1
      }
      if (month === "08" && review.label === "positive") {
        august.positive += 1
      }
      if (month === "08" && review.label === "negative") {
        august.negative += 1
      }
      if (month === "08" && review.label === "positive" && review.origin === 'Yelp') {
        august.ypositive += 1
      }
      if (month === "08" && review.label === "negative" && review.origin === 'Yelp') {
        august.ynegative += 1
      }
      if (month === "08" && review.label === "positive" && review.origin === 'TripAdvisor') {
        august.tpositive += 1
      }
      if (month === "08" && review.label === "negative" && review.origin === 'TripAdvisor') {
        august.tnegative += 1
      }
      if (month === "09" && review.label === "positive") {
        september.positive += 1
      }
      if (month === "09" && review.label === "negative") {
        september.negative += 1
      }
      if (month === "09" && review.label === "positive" && review.origin === 'Yelp') {
        september.ypositive += 1
      }
      if (month === "09" && review.label === "negative" && review.origin === 'Yelp') {
        september.ynegative += 1
      }
      if (month === "09" && review.label === "positive" && review.origin === 'TripAdvisor') {
        september.tpositive += 1
      }
      if (month === "09" && review.label === "negative" && review.origin === 'TripAdvisor') {
        september.tnegative += 1
      }
      if (month === "10" && review.label === "positive") {
        october.positive += 1
      }
      if (month === "10" && review.label === "negative") {
        october.negative += 1
      }
      if (month === "10" && review.label === "positive" && review.origin === 'Yelp') {
        october.ypositive += 1
      }
      if (month === "10" && review.label === "negative" && review.origin === 'Yelp') {
        october.ynegative += 1
      }
      if (month === "10" && review.label === "positive" && review.origin === 'TripAdvisor') {
        october.tpositive += 1
      }
      if (month === "10" && review.label === "negative" && review.origin === 'TripAdvisor') {
        october.tnegative += 1
      }

      if (month === "11" && review.label === "positive") {
        november.positive += 1
      }
      if (month === "11" && review.label === "negative") {
        november.negative += 1
      }
      if (month === "11" && review.label === "positive" && review.origin === 'Yelp') {
        november.ypositive += 1
      }
      if (month === "11" && review.label === "negative" && review.origin === 'Yelp') {
        november.ynegative += 1
      }
      if (month === "11" && review.label === "positive" && review.origin === 'TripAdvisor') {
        november.tpositive += 1
      }
      if (month === "11" && review.label === "negative" && review.origin === 'TripAdvisor') {
        november.tnegative += 1
      }
      if (month === "12" && review.label === "positive") {
        december.positive += 1
      }
      if (month === "12" && review.label === "negative") {
        december.negative += 1
      }
      if (month === "12" && review.label === "positive" && review.origin === 'Yelp') {
        december.ypositive += 1
      }
      if (month === "12" && review.label === "negative" && review.origin === 'Yelp') {
        december.ynegative += 1
      }
      if (month === "12" && review.label === "positive" && review.origin === 'TripAdvisor') {
        december.tpositive += 1
      }
      if (month === "12" && review.label === "negative" && review.origin === 'TripAdvisor') {
        december.tnegative += 1
      }
    })
  var positive = [january.positive, february.positive, march.positive, april.positive, may.positive, june.positive, july.positive, august.positive, september.positive, october.positive, november.positive, december.positive];
  var negative = [january.negative, february.negative, march.negative, april.negative, may.negative, june.negative, july.negative, august.negative, september.negative, october.negative, november.negative, december.negative];
  var tnegative = [january.tnegative, february.tnegative, march.tnegative, april.tnegative, may.tnegative, june.tnegative, july.tnegative, august.tnegative, september.tnegative, october.tnegative, november.tnegative, december.tnegative];
  var tpositive = [january.tpositive, february.tpositive, march.tpositive, april.tpositive, may.tpositive, june.tpositive, july.tpositive, august.tpositive, september.tpositive, october.tpositive, november.tpositive, december.tpositive];
  var ynegative = [january.ynegative, february.ynegative, march.ynegative, april.ynegative, may.ynegative, june.ynegative, july.ynegative, august.ynegative, september.ynegative, october.ynegative, november.ynegative, december.ynegative];
  var ypositive = [january.ypositive, february.ypositive, march.ypositive, april.ypositive, may.ypositive, june.ypositive, july.ypositive, august.ypositive, september.ypositive, october.ypositive, november.ypositive, december.ypositive];
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
    {
        label: 'Positive',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#8FD8BE',
        borderColor: '#1FDA9A',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#1FDA9A',
        pointBackgroundColor: '#1FDA9A',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#149367',
        pointHoverBorderColor: '#149367',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: positive
      },
      {
        label: 'Negative',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#ED6F79',
        borderColor: '#DB3340',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#B72A36',
        pointBackgroundColor: '#B72A36',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#B72A36',
        pointHoverBorderColor: '#B72A36',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: negative
      },
      {
        label: 'Positive - Yelp',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#149165',
        borderColor: '#149165',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#1FDA9A',
        pointBackgroundColor: '#1FDA9A',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#149367',
        pointHoverBorderColor: '#149367',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: ypositive
      },
      {
        label: 'Negative - Yelp',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#96222C',
        borderColor: '#96222C',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#96222C',
        pointBackgroundColor: '#96222C',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#96222C',
        pointHoverBorderColor: '#96222C',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: ynegative
      },
      {
        label: 'Positive - TripAdvisor',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#0E6B4A',
        borderColor: '#0E6B4A',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#0E6B4A',
        pointBackgroundColor: '#0E6B4A',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#0E6B4A',
        pointHoverBorderColor: '#0E6B4A',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: tpositive
      },
      {
        label: 'Negative - TripAdvisor',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#721A21',
        borderColor: '#721A21',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#721A21',
        pointBackgroundColor: '#721A21',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#149367',
        pointHoverBorderColor: '#149367',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: tnegative
      }
    ]
  };
}

  render() {
     const chartyOptions = {
        scales: {
          xAxes: [
          {
            ticks: {
              fontSize: 20
            }
          }]
        },
        legend: {
        labels: {
          fontSize: 20
        }
      }
    }

    const chartTitles = {
  fontSize: 30,
  fontFamily: 'arial',
  padding: 0,
  margin: 0
}


    return (
      <div className="sentiment-over-time-siteDivide">
      <h3 style={chartTitles}>Customer perception by month</h3>
        <Line data={this.parseSentimentDatabyTime(this.props.reviews)}
  options={chartyOptions}/>
      </div>
    );
  }
}






export default SentimentOverSiteDivide;