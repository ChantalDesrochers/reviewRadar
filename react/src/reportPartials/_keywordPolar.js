import React, { Component } from "react";
import ReturnConcepts from "./returnConcepts.js";
import { Polar } from 'react-chartjs-2';

class KeywordPolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      testData: ReturnConcepts,
      data: {
        datasets: [{
          data: [],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
          ],
          label: 'Review Concepts'
        }],
        labels: []
      }
    }
  }

 componentDidMount() {
var getKWData = () => {
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
getKWData()
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
            <div className="pie-chart">
              <Polar data={this.state.data} getElementsAtEvent={(elem)=>{handleClick(elem)}}/>
            </div>
        );
    }
}

export default KeywordPolar;