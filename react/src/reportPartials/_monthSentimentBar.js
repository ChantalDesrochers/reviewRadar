import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';



class SentimentBarChartMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Positive',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      },
            {
        label: 'Negative',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }],
        options: {
          scales: {
            xAxes: [{
              stacked: true
              ticks: {
                min: 0
              }
            }]
          }
        }
    }
  }
}
}
}





render() {

    return (
            <div className="bar-month-chart">
              <Bar data={this.state.data}/>
            </div>
        );
     }
  }
export default SentimentBarChartMonth;