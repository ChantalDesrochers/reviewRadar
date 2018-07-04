import React, { Component } from "react";
import {HorizontalBar} from 'react-chartjs-2';
import ReturnConcepts from "./returnConcepts.js";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      testData: ReturnConcepts,
      data: {
      labels: [],
      datasets: [{
        label: 'Keyword Frequency',
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
              ticks: {
                min: 0
              }
            }]
          }
        }
    }
  }
}

componentDidMount() {
var getChartData = () => {
var sortedArray = this.state.testData.sort(function(a, b) {
    return b.references.length - a.references.length
  });
var topSeven = sortedArray.slice(0,6)
var label = []
var data = []
topSeven.forEach(function(concept) {
  data.push(concept.references.length)
  label.push(concept.content)
});
this.setState({ ...this.state.data.labels = label, ...this.state.data.datasets[0].data = data})
}
getChartData()
  }


  render() {


const handleClick = elem => {
if (elem[0]) {
console.log(elem)
let chartPoints = elem;
let clickedPointIndex = chartPoints[0]['_index']
const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
 }
 }


        return (
            <div className="bar-chart">
            <h1>Keyword Frequency</h1>
              <HorizontalBar data={this.state.data} getElementsAtEvent={(elem)=>{handleClick(elem)}}/>
            </div>
        );
    }

}
 export default KeywordBarChart;