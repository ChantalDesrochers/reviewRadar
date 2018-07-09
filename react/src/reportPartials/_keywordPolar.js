import React, { Component } from "react";
import organizedConcepts from "./organizedConcepts.js";
import { Polar } from 'react-chartjs-2';

class KeywordPolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      testData: organizedConcepts,
      data: {
        datasets: [{
          data: [],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
            '#914CAD',
            '#4CAD8B'
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
var topSeven = sortedArray.slice(0,7)
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
// console.log(elem)
let chartPoints = elem;
let clickedPointIndex = chartPoints[0]['_index']
const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
// console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
// console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
 }
 }

        return (
            <div className="polar-chart" style={{margin:'100px'}}>
              <Polar data={this.state.data} getElementsAtEvent={(elem)=>{handleClick(elem)}}/>
            </div>
        );
    }
}

export default KeywordPolar;
