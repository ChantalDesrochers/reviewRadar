import React, { Component } from "react";

import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
      'Very Positive',
      'Positive',
      'Neutral',
      'Negative',
      'Very Negative'
    ],
    datasets: [{
      data: [300, 50, 100, 200, 23],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        'red',
        'green'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        'red',
        'green'
      ],
    }]
    }



class PieChart extends Component {
  constructor(props){
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
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        'red',
        'green'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        'red',
        'green'
      ],
    }]
    }
}
}

componentDidMount() {
var gettingChartData = () => {
let dataScores = []
      const reviews = this.state.reviews
        //console.log('reviews',reviews)
      var veryPositive = 0;
      var positive = 0;
      var neutral = 0
      var negative = 0
      var veryNegative = 0
      reviews.forEach(function(review) {
        var rounded = parseFloat(review.score.toFixed(1))
        switch (rounded) {
          case 0:
            neutral += 1;
            break;
          case 0.1:
          case 0.2:
          case 0.3:
          case 0.4:
          case 0.6:
            positive += 1;
            break;
          case 0.7:
          case 0.8:
          case 0.9:
          case 1:
            veryPositive += 1
          case (-0.5):
          case (-0.4):
          case (-0.3):
          case (-0.2):
          case (-0.1):
            negative += 1;
            break;
          case (-1):
          case (-0.9):
          case (-0.8):
          case (-0.7):
          case (-0.6):
            veryNegative += 1;
            break;
        }

        dataScores = [veryPositive, positive, neutral, negative, veryNegative]
      });
      console.log(dataScores)
      this.setState({ ...this.state.chartdata.datasets[0].data = dataScores })
}
gettingChartData()
console.log("datasets", this.state.chartdata.datasets[0].data)
}



render() {

// console.log(this.state.chartdata)



const handleClicktwo = elem => {
let chartPoints = elem;
let clickedPointIndex = chartPoints[0]['_index']
const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
alert(`You clicked ${label} with a score of ${score}`)


 }

        return (
            <div className="pie-chart">
            <h1>Inside Pie Chart div</h1>
            <Pie data={this.state.chartdata} getElementsAtEvent={handleClicktwo} ref="myChart"/>
            </div>
        );
    }

}

export default PieChart;
