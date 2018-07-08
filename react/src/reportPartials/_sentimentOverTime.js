import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

class SentimentOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    console.log("sentiment over time")
  }

  componentDidMount(){
    console.log('in componentDidMount')
    console.log('state when mounting', this.state.reviews)
  }

  parseSentimentDatabyTime = (reviews) => {
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
    february.negative += 1
  }
  if (month === "03" && review.label === "positive") {
    march.positive += 1
  }
  if (month === "03" && review.label === "negative") {
    march.negative += 1
  }
  if (month === "04" && review.label === "positive") {
    april.positive += 1
  }
  if (month === "04" && review.label === "negative") {
    april.negative += 1
  }
  if (month === "05" && review.label === "positive") {
    may.positive += 1
  }
  if (month === "05" && review.label === "negative") {
    may.negative += 1
  }
  if (month === "06" && review.label === "positive") {
    june.positive += 1
  }
  if (month === "06" && review.label === "negative") {
    june.negative += 1
  }
  if (month === "07" && review.label === "positive") {
    july.positive += 1
  }
  if (month === "07" && review.label === "negative") {
    july.negative += 1
  }
  if (month === "08" && review.label === "positive") {
    august.positive += 1
  }
  if (month === "08" && review.label === "negative") {
    august.negative += 1
  }
  if (month === "09" && review.label === "positive") {
    september.positive += 1
  }
  if (month === "09" && review.label === "negative") {
    september.negative += 1
  }
  if (month === "10" && review.label === "positive") {
    october.positive += 1
  }
  if (month === "10" && review.label === "negative") {
    october.negative += 1
  }
  if (month === "11" && review.label === "positive") {
    november.positive += 1
  }
  if (month === "11" && review.label === "negative") {
    november.negative += 1
  }
  if (month === "12" && review.label === "positive") {
    december.positive += 1
  }
  if (month === "12" && review.label === "negative") {
    december.negative += 1
  }
  })
  var positive = [january.positive, february.positive, march.positive, april.positive, may.positive, june.positive, july.positive, august.positive, september.positive, october.positive, november.positive, december.positive];
  var negative = [january.negative, february.negative, march.negative, april.negative, may.negative, june.negative, july.negative, august.negative, september.negative, october.negative, november.negative, december.negative];

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
      }
    ]
  };
}

  render() {
    const handleClick = elem => {

      console.log('elem', elem)
      console.log('elem 0', elem[0])
      console.log('elem 1', elem[1])

      if (elem[0] || elem[1]) {
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        // let clickedPointIndexPositive = chartPoints[0]['_index'][['_yScale']['ticks']
        // let clickedPointIndexNeg = chartPoints[q]['_index']
        console.log(clickedPointIndex)
        const month = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        // console.log("month", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
        this.props.clickHandlerForSentimentTimeChart(month);
      }
    }


    return (
      <div className="sentiment-over-time" style={{"height" : 375}}>
        <Line data={this.parseSentimentDatabyTime(this.props.reviews)} onElementsClick={(elem)=>{handleClick(elem)}} width={10}
  height={120}
  options={{
    maintainAspectRatio: false
  }}/>
      </div>
    );
  }
}






export default SentimentOverTime;