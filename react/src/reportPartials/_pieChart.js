import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto'

class PieChart extends Component {
  constructor(props) {
    super(props);

  }

  prepareHtml = (handleClicktwo) => {
    const chartTitles = {
  fontSize: 30,
  fontFamily: 'arial'
}
      const chartOptions = {
      legend: {
        labels: {
          fontSize: 20
        }
      }
    }

    if (this.props.s.dataFocus === 'review') {
      return <div className="pie-chart" style={{height:450}}>
        <h3 style={chartTitles}>How your patrons are feeling</h3>
        <Pie data={this.parseChartData(this.props.reviews)} getElementsAtEvent={(elem) => { handleClicktwo(elem) }} ref="myChart"
          width={10}
          height={10}
          options={{
            maintainAspectRatio: false
          }}
          options={chartOptions} />
      </div>
    }
    else if (this.props.s.dataFocus === 'chart') {
      return <div className="pie-chart" style={{height:550}}>
       <h3>How your patrons are feeling</h3>
        <Pie data={this.parseChartData(this.props.reviews)} getElementsAtEvent={(elem) => { handleClicktwo(elem) }} ref="myChart"
          width={10}
          height={10}
          options={{
            maintainAspectRatio: false
          }}
          options={chartOptions}/>
      </div>
    }
  }
  parseChartData = (reviews) => {
    let veryPositive = 0;
    let positive = 0;
    let neutral = 0
    let negative = 0
    let veryNegative = 0
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
      }]
    }
  }



  render() {
    // this.parseChartData();

    const handleClicktwo = elem => {
      if (elem[0]) {
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
        this.props.pickReviewTypeToDisplay(label);
      }
    }

    return (<div>
      {this.prepareHtml(handleClicktwo)}
    </div>
    )
  }
}



export default PieChart;
