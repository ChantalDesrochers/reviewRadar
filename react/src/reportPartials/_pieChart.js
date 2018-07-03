import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props) {
    console.log('calling pie chart');
    super(props);
    this.state = {
      reviews: this.props.reviews,
      chartdata: {
        labels: [
          'Very Positive',
          'Positive',
          'Neutral',
          'Negative',
          'Very Negative'
        ],
        datasets: [{
          data: [],
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
  }
  parseChartData = () => {
    if (this.state.chartdata.datasets[0].data.length === 0) {
      let veryPositive = 0;
      let positive = 0;
      let neutral = 0
      let negative = 0
      let veryNegative = 0
      this.state.reviews.forEach(function (review) {
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
      this.setState({ ...this.state.chartdata.datasets[0].data = [veryPositive, positive, neutral, negative, veryNegative] })
    }
  }

  render() {
    this.parseChartData();
    const handleClicktwo = elem => {
      if (elem[0]) {
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
        this.props.pickReviewTypeToDisplay(label);
      }
    }
    return (
      <div className="pie-chart">
        <h1 style={{ marginTop: 0 }}>Overall Sentiment</h1>
        <Pie data={this.state.chartdata} getElementsAtEvent={(elem) => { handleClicktwo(elem) }} ref="myChart" />
      </div>
    );
  }
}
export default PieChart;