import React, { Component } from "react";
import { HorizontalBar } from 'react-chartjs-2';
import OrganizedConcepts from "./organizedConcepts";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      testData: OrganizedConcepts,
      data: {
        labels: [],
        datasets: [{
          label: 'Keyword Frequency',
          backgroundColor: '#6EEFC2',
          borderColor: '#5FD8AE',
          borderWidth: 5,
          hoverBackgroundColor: '#60F2BF',
          hoverBorderColor: '#1FDA9A',
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
      var sortedArray = this.state.testData.sort(function (a, b) {
        return b.references.length - a.references.length
      });
      var topSeven = sortedArray.slice(0, 6)
      var label = []
      var data = []
      topSeven.forEach(function (concept) {
        data.push(concept.references.length)
        label.push(concept.content)
      });
      const kwBarState = { ...this.state }
      kwBarState.data.labels = label
      kwBarState.data.datasets[0].data = data
      this.setState({ kwBarState })
      console.log('kwBarState', kwBarState)
      // this.setState({ ...this.state.data.labels = label, ...this.state.data.datasets[0].data = data})
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
        this.props.reviewTypeToDisplayKW(label)
        const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
        this.props.reviewTypeToDisplayKW(label);
        console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
        console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
      }
    }
    return (
      <div className="bar-chart" style={{"height" : 375}}>

        <HorizontalBar data={this.state.data} getElementsAtEvent={(elem) => { handleClick(elem) }}    width={10}
  height={150}
  options={{
    maintainAspectRatio: false}}/>
      </div>
    );
  }
}

export default KeywordBarChart;

