import React, { Component } from "react";
import {HorizontalBar} from 'react-chartjs-2';
import ReturnConcepts from './conceptData.js';

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }]
    }
  }
}


  render() {

        return (
            <div className="pie-chart">
            <h1>Keyword Frequency</h1>
              <HorizontalBar data={this.state.data} />
            </div>
        );
    }

}
 export default KeywordBarChart;