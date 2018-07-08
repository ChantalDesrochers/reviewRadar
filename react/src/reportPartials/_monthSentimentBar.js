import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';


class SentimentBarChartMonth extends Component {
  constructor(props) {
    super(props);
  }



  parseSentimentDatabyMonth = (reviews) => {
      var january = {
        positive: 0,
        negative: 0
      }
      var february = {
        positive: 0,
        negative: 0
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
        negative: 0
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
        negative: 0
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
        negative: 0
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
            datasets: [{
              label: 'Positive',
              backgroundColor: '#1FDA9A',
              borderColor: '#1FDA9A',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: positive
            }, {
              label: 'Negative',
              backgroundColor: '#DB3340',
              borderColor: '#DB3340',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: negative
            }],
            options: {
              scales: {
                xAxes: [{
                  stacked: true,
                  ticks: {
                    min: 0
                  }
                }]
              }
            }
          }

      }

render() {

    return (
            <div className="bar-month-chart">
              <Bar data={this.parseSentimentDatabyMonth(this.props.reviews)}/>
            </div>
        );
     }
  }
export default SentimentBarChartMonth;
