import React, { Component } from "react";
import organizedConcepts from "./organizedConcepts.js";
import { Polar } from 'react-chartjs-2';

class KeywordPolar extends Component {
  constructor(props) {
    super(props);
  }


getKWData = returnConcepts => {

var sortedArray = returnConcepts.sort(function(a, b) {
    return b.references.length - a.references.length
  });
var topSeven = sortedArray.slice(0,7)
var label = []
var data = []
topSeven.forEach(function(concept) {
  data.push(concept.references.length)
  label.push(concept.content)
});
return {
        datasets: [{
          data: data,
          backgroundColor: [
            '#2DC0FF',
            '#22F4AB',
            '#E8DBBB',
            '#F2BF1A',
            '#F93949',
            '#DC22F4',
            '#1A6D91'
          ],
          label: 'Review Concepts'
        }],
        labels: label
      }
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

const chartyOptions = {
        scales: {
          yAxes: [
          {
            ticks: {
              fontSize: 20
            }
          }]
        },
        legend: {
        labels: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'roboto'
        }
      },
      barThickness: 15,
      }



 const chartTitles = {
  fontSize: 25,
  fontFamily: 'roboto',
  color: 'black',
  padding: 0,
  marginBottom: 20,
  textAlign: 'left'
}

        return (
            <div style={{marginTop: 120, marginBottom: 130}}>
             <p style={chartTitles}>Radar In On What Users Are Talking About</p>
              <Polar data={this.getKWData(this.props.s.organizedConcepts)} options={chartyOptions}/>
            </div>
        );
    }
}

export default KeywordPolar;