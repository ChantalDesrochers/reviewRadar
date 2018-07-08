import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class PieSentimentTripAdvisor extends Component {
  constructor(props) {
    super(props);

  }

  parseSentimentsTripAdvisor = (reviews) => {
    let tripAdvisorReviews = reviews.filter(review => review.origin.includes("TripAdvisor"))
    console.log('tripAdvisor reviews', tripAdvisorReviews)
    console.log('all reviews', reviews)
      let veryPositive = 0;
      let positive = 0;
      let neutral = 0
      let negative = 0
      let veryNegative = 0
      tripAdvisorReviews.forEach(function (review) {
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
          '#28ABE3',
          '#1FDA9A',
          '#F7EAC8',
          '#DB3340',
          '#E8B71A'
        ],
        hoverBackgroundColor: [
          '#78C2E2',
          '#6AD8B2',
          '#F7F0DE',
          '#DB5964',
          '#E8C34A'
        ],
      }],
      options: {
        legend: {
          labels: {
            fontSize: 50
          }
        }
      }
    }
  }



  render() {


    const chartOptions = {
      legend: {
        labels: {
          fontSize: 20
        }
      }
    }

    return (
      <div className="pie-chart" style={{"height" : 50}}>
      <h2>What your customers on TripAdvisor think</h2>
        <Pie data={this.parseSentimentsTripAdvisor(this.props.reviews)} ref="myChart"
  width={5}
  height={5}
  options={{
    maintainAspectRatio: false,
  }}
  options={chartOptions} />
      </div>
    );
  }
}



export default PieSentimentTripAdvisor;