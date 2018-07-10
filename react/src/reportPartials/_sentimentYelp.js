import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto'
import { Typography } from "@material-ui/core";


class PieSentimentYelp extends Component {
  constructor(props) {
    super(props);
  }


  parseChartData = (reviews) => {
    let yelpReviews = reviews.filter(review => review.origin === "Yelp")
    console.log('tripadvisor', yelpReviews)
    let veryPositive = 0;
    let positive = 0;
    let neutral = 0
    let negative = 0
    let veryNegative = 0
    yelpReviews.forEach(function (review) {
      var rounded = parseFloat(review.score.toFixed(1))
      if (rounded === 0) {
        neutral += 1;
      } else if (rounded > 0 && rounded <= 0.5) {
        positive += 1;
      } else if (rounded > 0.5) {
        veryPositive += 1;
      } else if (rounded < 0 && rounded >= -0.5) {
        negative += 1;
      } else if (rounded < -0.5) {
        veryNegative += 1;
      }
    });
    const array = [veryPositive, positive, neutral, negative, veryNegative]
    // }
    return {
      labels: [
        'Very Positive',
        'Positive',
        'Neutral',
        'Negative',
        'Very Negative'
      ],
      datasets: [{
        data: array,
        backgroundColor: [
          '#51B7E2',
          '#3ED8A2',
          '#F7F0DE',
          '#DB535E',
          '#E8C34A'
        ],
        hoverBackgroundColor: [
          '#78C2E2',
          '#6AD8B2',
          '#F7F0DE',
          '#DB5964',
          '#E8C34A'
        ],
      }]
    }
  }



  render() {
      const chartTitles = {
  fontSize: 25,
  fontFamily: 'roboto',
  color: 'black',
  padding: 0,
  marginBottom: 20,
  textAlign: 'left'
}
      const chartOptions = {
          legend: {
            position: 'top',
            labels: {
              fontSize: 20,
              fontFamily: 'Roboto'
            }
          }
        }


    return (
      <div style={{marginTop: 50, height: 600}}>
        <p style={chartTitles}>How Your <b style={{color: "#E8B71A"}}>Yelp</b> Customers Feel</p>
       <Pie data={this.parseChartData(this.props.reviews)} options={chartOptions} width={5}
          height={5}/>
    </div>
    )
  }
}



export default PieSentimentYelp;
