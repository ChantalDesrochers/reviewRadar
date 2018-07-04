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
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 5,
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
      this.setState({ ...this.state.data.labels = label, ...this.state.data.datasets[0].data = data })
    }
    getChartData()
  }


  render() {
    const handleClick = elem => {
      if (elem[0]) {
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
        //here i need to send what type to show when first loaded, trigger the button press? organized concpets 
        //passed instead maybe or search in completed Data in keywords to show?
        this.props.clickHandlerForKeyWordBarChart(label);
      }
    }
    return (
      <div className="pie-chart">
        <HorizontalBar data={this.state.data} getElementsAtEvent={(elem) => { handleClick(elem) }} />
      </div>
    );
  }
}
export default KeywordBarChart;

  // onClick={() => this.props.clickHandler('sentiment')}
  // componentDidMount() {
  //   console.log('in component did mount', this.props.clickHandlerForKeyWordBarChart)