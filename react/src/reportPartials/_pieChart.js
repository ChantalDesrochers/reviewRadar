import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props) {
    super(props);

  }

  parseChartData = (reviews) => {
      let veryPositive = 0;
      let positive = 0;
      let neutral = 0
      let negative = 0
      let veryNegative = 0
      console.log('inside parsechartdata', reviews)
      reviews.forEach(function (review) {
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
            '#9B59B6',
            '#2980B9',
            '#16A085',
            '#C0392B',
            '#99A3A4'
          ],
          hoverBackgroundColor: [
            '#9B59B6',
            '#2980B9',
            '#16A085',
            '#C0392B',
            '#99A3A4'
          ],
        }]
    }
  }



  render() {
    // this.parseChartData();
    const handleClicktwo = elem => {
      if (elem[0]) {
        console.log('in pie chart props', this.props)
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
        this.props.pickReviewTypeToDisplay(label);
        console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
        console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
      }
    }

    return (
      <div className="pie-chart">
        <h1>Overall Sentiment</h1>
        <Pie data={this.parseChartData(this.props.reviews)} getElementsAtEvent={(elem) => { handleClicktwo(elem) }} ref="myChart"
  width={10}
  height={110}
  options={{
    maintainAspectRatio: true
  }} />
      </div>
    );
  }
}



export default PieChart;


