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
    chartData: this.props.chartData
}
}



// const handleClick = (event) => {
//   alert('clicked')
//   // const chart = this.Pie.getChart()
//   // // chart.getElementAtEvent(e))
//   // // console.log(chart.onElementsClick(e, item))
//   // var points = chart.getElementAtEvent(e);
//   // alert(chart.data.points.indexOf(points[0]));

//   }


render() {

  // const handleClick = dataset => {
  // // alert('clicked')
  // // let chart = this.refs.myChart.chart_instance;
  // alert(dataset.data)

  // const handleClick = elem => {
  // // alert('clicked')
  // // let chart = this.refs.myChart.chart_instance; //this is not working! undefined
  // // var activeElement = chart.getElement
  // // alert(this.data.datasets[elem[0]._datasetIndex].data[elem[0]._index]);
  // alert(this.elem.data.label)
  // // var test = chart.getElementAtEvent(e)
  // // console.log(test)
  // // console.log(chart.onElementsClick(e, item))
  // // var points = chart.getElementAtEvent(e);
  // // alert(chart.datasets.points.indexOf(points[0]));
  // }

 const handleClicktwo = elem => {
 // console.log(getElementsAtEvent(elem))
let chartPoints = elem;
// console.log("chartPoints", chartPoints[0]['_chart']['config']['data']['labels']['_index'])//check to see if we're getting the array
let clickedPointIndex = chartPoints[0]['_index']
const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
// let label = chartPoints.data.labels[clickedPointIndex]
alert(`You clicked ${label} with a score of ${score}`)


 }

        return (
            <div className="pie-chart">
            <h1>Inside Pie Chart div</h1>
            <Pie data={data} getElementsAtEvent={handleClicktwo} ref="myChart"/>
         {/*<Pie data={data} getDatasetAtEvent={handleClick} ref="myChart"/>*/}
            </div>
        );
    }

}

export default PieChart;
