import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import 'typeface-roboto'

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
          fontWeight: 'bold'
        }
      },
      barThickness: 15,
      onElementsClick: function(evt, elements) {
          var datasetIndex;
          var dataset;
          var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']

          if (elements.length) {
            var index = elements[0]._index;
            datasetIndex = elements[0]._datasetIndex;
            alert('this click is working y?')
            // Reset old state
            dataset = this.data.datasets[datasetIndex];
            dataset.backgroundColor = colors.slice();
            dataset.hoverBackgroundColor = colors.slice();

            dataset.backgroundColor[index] = 'red'; // click color
            dataset.hoverBackgroundColor[index] = 'red';
          } else {
            // remove hover styles
            for (datasetIndex = 0; datasetIndex < this.data.datasets.length; ++datasetIndex) {
              dataset = this.data.datasets[datasetIndex];
              dataset.backgroundColor = colors.slice();
              dataset.hoverBackgroundColor = colors.slice();
            }
          }

          this.update();
        }
      }

  const chartTitles = {
  fontSize: 30,
  fontFamily: 'arial',
  padding: 0,
  margin: 0
}



    return (
      <div className="bar-chart" style={{"height" : 450}}>
      <h3 style={chartTitles}>Most commonly mentioned terms</h3>
        <HorizontalBar
          data={this.getChartData(this.props.organizedConcepts)}
          getElementsAtEvent={(elem) => { handleClick(elem) }}    width={10}
  height={7}
  options={{
    maintainAspectRatio: false}}
    options={chartyOptions}
    ref="myChart"/>
      </div>
    );
  }
}

export default KeywordBarChart;
