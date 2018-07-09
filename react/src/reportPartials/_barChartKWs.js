import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
  }

  getChartData = returnConcepts => {
    var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']
    var topSeven = returnConcepts.slice(0, 6);
    var label = [];
    var data = [];
    topSeven.forEach(function(concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
<<<<<<< HEAD
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
=======
      datasets: [{
        label: 'Keyword Frequency',
        backgroundColor: colors,
        borderColor: '#5FD8AE',
        borderWidth: 5,
        hoverBackgroundColor: colors,
        hoverBorderColor: '#1FDA9A',
        data: data
      }],
      options: {
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 30
>>>>>>> d9eeacff309db55073e046e8916d60620c3c9af6
            }
          }]

        }
      }
<<<<<<< HEAD
    };
  };
=======
    }
  }

>>>>>>> d9eeacff309db55073e046e8916d60620c3c9af6

  render() {
    const handleClick = elem => {
<<<<<<< HEAD
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
=======

      if (elem[0]) {
        console.log('elem', elem)
        console.log('color', elem[0]['_model']['backgroundColor'])
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        console.log('dataset index', chartPoints[0]._datasetIndex)
        // var colourProp = elem[0]['_chart']['config']['data']['datasets'][0]['backgroundColor'][clickedPointIndex]
        var colourProptest = elem[0]['_chart']['config']['data']['datasets'][0]['backgroundColor']

        console.log('colorbefore', colourProptest)
        // colourProptest = 'red'
        console.log('colorafter', colourProptest)
        console.log("clickedpoint", clickedPointIndex)
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        this.props.reviewTypeToDisplayKW(label)
        console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
        console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
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
          fontSize: 20
        }
      },
      barThickness: 15,
      getElementAtEvent: function(evt, elements) {
          var datasetIndex;
          var dataset;
          var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']

          if (elements.length) {
            var index = elements[0]._index;
            datasetIndex = elements[0]._datasetIndex;
            alert('this click is working?')
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




    return (

>>>>>>> d9eeacff309db55073e046e8916d60620c3c9af6
      <div className="bar-chart" style={{"height" : 375}}>
        <HorizontalBar
          data={this.getChartData(this.props.organizedConcepts)}
          getElementsAtEvent={(elem) => { handleClick(elem) }}    width={10}
<<<<<<< HEAD
  height={150}
  options={{
    maintainAspectRatio: false}}/>
=======
  height={10}
  options={{
    maintainAspectRatio: false}}
    options={chartyOptions}
    ref="myChart"
    />
>>>>>>> d9eeacff309db55073e046e8916d60620c3c9af6
      </div>
    );
  }
}

export default KeywordBarChart;
