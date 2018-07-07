import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
  }

  getChartData = returnConcepts => {
    var topSeven = returnConcepts.slice(0, 6);
    var label = [];
    var data = [];
    topSeven.forEach(function(concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
      datasets: [
        {
          label: 'Keyword Frequency',
          backgroundColor: '#6EEFC2',
          borderColor: '#5FD8AE',
          borderWidth: 5,
          hoverBackgroundColor: '#60F2BF',
          hoverBorderColor: '#1FDA9A',
          data: data
        }
      ],
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      }
    };
  };

  render() {
    const handleClick = elem => {
      if (elem[0]) {
        console.log(elem);
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]["_index"];
        const label =
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ];
        this.props.reviewTypeToDisplayKW(label);
        const score =
          chartPoints[0]["_chart"]["config"]["data"]["datasets"][0]["data"][
            clickedPointIndex
          ];
        console.log(
          "chartPoints - label",
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ]
        );
        console.log(
          "chartPoints - score",
          chartPoints[0]["_chart"]["config"]["data"]["datasets"][0]["data"][
            clickedPointIndex
          ]
        );
      }
    };

    return (
      <div className="bar-chart" style={{"height" : 375}}>
      
      

        <h1>Keyword Frequency</h1>
        <HorizontalBar
          data={this.getChartData(this.props.allConcepts)}
          getElementsAtEvent={(elem) => { handleClick(elem) }}    width={10}
  height={150}
  options={{
    maintainAspectRatio: false}}/>
      </div>
    );
  }
}

export default KeywordBarChart;
